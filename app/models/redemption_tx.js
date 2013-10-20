import BitcoinService from 'meklebar/models/bitcoin_service';
import RedemptionInput from 'meklebar/models/redemption_input';
import Signature from 'meklebar/models/signature';

var RedemptionTx = Ember.Object.extend({
  inputHash: null,
  input: null,
  address: null,
  validAddress: Ember.computed.equal('address.length', 34),
  validTx: Ember.computed.notEmpty('input.escrowOut'),
  validRequest: Ember.computed.and('validTx', 'validAddress', 'allSigned'),

  amount: Ember.computed.alias('input.escrowOut.amount'),
  txIn: Ember.computed.alias('input.escrowOut.txIn'),
  signaturesNeeded: Ember.computed.alias('input.escrowOut.signaturesNeeded'),
  signers: Ember.computed.alias('input.escrowOut.signers'),

  signerAddresses: function() {
    var signers = this.get('signers');
    if (!signers) return;

    return signers.map(function(pk) {
      return Bitcoin.Address.fromPubKey(pk).toString();
    });
  }.property('signers.@'),

  receiverRole: function() {
    var address = this.get('address');
    var signers = this.get('signerAddresses');
    if (Ember.isEmpty(address) || !signers) return;

    var role;

    switch (address) {
      case signers[0]:
        role = 'buyer';
        break;
      case signers[1]:
        role = 'mediator';
        break;
      case signers[signers.length - 1]:
        role = 'merchant';
        break;
    };

    return role;
  }.property('address', 'signerAddresses'),

  receiverBuyer: Ember.computed.equal('receiverRole', 'buyer'),
  receiverMediator: Ember.computed.equal('receiverRole', 'mediator'),
  receiverMerchant: Ember.computed.equal('receiverRole', 'merchant'),

  fee: function() {
    return '0.0005';
  }.property(),

  amountWithoutFee: function() {
    var amount = this.get('amount');
    var fee = this.get('fee');
    if (!amount) return 0;

    amount = Bitcoin.Util.parseValue(amount);
    fee = Bitcoin.Util.parseValue(fee);
    return amount.subtract(fee).intValue();
  }.property('amount', 'fee'),

  bytePubKeys: function() {
    var pubKeys = this.get('signers');
    if (!pubKeys) return;

    return pubKeys.map(function(key) {
      return Crypto.util.hexToBytes(key);
    });
  }.property('signers'),

  createSignature: function(number) {
    var hash = this.get('hashForSignature');
    var pubKeys = this.get('bytePubKeys');
    if (!pubKeys || !hash) return;

    return Signature.create({
      hash: Crypto.util.hexToBytes(hash),
      publicKeys: pubKeys,
      number: number
    });
  },

  signatures: function() {
    var needed = this.get('signaturesNeeded');
    var hash = this.get('hashForSignature');
    var pubKeys = this.get('bytePubKeys');
    var self = this;
    if (!pubKeys || !hash) return;

    var arr = !needed ? [] : new Array(needed).join(',').split(',');

    return arr.map(function(_, index) {
      return self.createSignature(index + 1);
    });
  }.property('signaturesNeeded', 'hashForSignature', 'bytePubKeys'),

  moreThanOneSig: Ember.computed.gt('signatures.length', 1),

  numSignedPubKeys: function() {
    var signs = this.get('signatures');
    if (!signs) return;

    var publics = signs.map(function(s) {
      return s.get('validPublic');
    });

    return publics.compact().uniq().length;
  }.property('signatures.@each.validPublic'),

  allSigned: function() {
    var signed = this.get('numSignedPubKeys');
    var needed = this.get('signaturesNeeded');

    return signed === needed;
  }.property('numSignedPubKeys', 'signaturesNeeded'),

  txOut: function() {
    var address = this.get('address');
    var value = this.get('amountWithoutFee');
    if (Ember.isEmpty(address) || !value) return;

    var amount = Bitcoin.Util.amountToBytes(value);
    var addr = new Bitcoin.Address(address);

    return new Bitcoin.TransactionOut({
      value: amount,
      script: Bitcoin.Script.createOutputScript(addr)
    });
  }.property('address', 'amountWithoutFee'),

  basicTx: function() {
    var txIn = this.get('txIn');
    var txOut = this.get('txOut');
    if (!txIn || !txOut) return;

    var tx = new Bitcoin.Transaction();
    tx.addInput(txIn);
    tx.addOutput(txOut);

    return tx;
  }.property('txIn', 'txOut'),

  finalTx: function() {
    var tx = this.get('basicTx');
    if (!tx) return;
    tx = tx.clone();

    var signatures = this.get('signatures').map(function(s) {
      return s.get('signature');
    });

    tx.ins[0].multiSignScript(signatures, tx, 0);

    return tx;
  }.property('basicTx', 'signatures.@each'),

  hashForSignature: function() {
    var tx = this.get('basicTx');
    if (!tx) return;

    var hash = tx.hashTransactionForSignature(tx.ins[0].script, 0, 1);
    return Crypto.util.bytesToHex(hash);
  }.property('basicTx'),

  requestCode: function() {
    var hash = this.get('input.hash');
    var address = this.get('address');

    if (!hash || !this.get('validAddress')) return;

    var data = [hash, address].join(':');
    return btoa(data);
  }.property('input.hash', 'address'),

  bbe: function() {
    var tx = this.get('finalTx');
    if (!tx) return;

    var res = tx.toJSON();

    return JSON.stringify(res, null, 2);
  }.property('finalTx'),

  hex: function() {
    var tx = this.get('finalTx');
    if (!tx) return;
    return tx.hex();
  }.property('finalTx'),

  hash: function() {
    if (!this.get('validRequest')) return;

    var tx = this.get('finalTx');
    return Crypto.util.bytesToHex(tx.getHash().reverse());
  }.property('finalTx', 'validTx'),

  blockchainUrl: function() {
    var hash = this.get('hash');
    if (!hash) return;

    return BitcoinService.blockchainTxUrl(hash);
  }.property('hash'),

  fetchInput: function() {
    // TODO don't set already redeemed transactions

    var hash = this.get('inputHash');
    var self = this;

    if (Ember.isEmpty(hash) || hash.length !== 64) {
      return this.set('input', null);
    }

    BitcoinService.txFromHash(hash).then(function(data) {
      self.set('input', RedemptionInput.create({ data: data }));
    }, function() {
      self.set('input', null);
      console.error(arguments);
    });
  }.observes('inputHash'),

  sendTx: function() {
    return BitcoinService.pushMultisigTx(this.get('hex'));
  }
});

export default RedemptionTx;
