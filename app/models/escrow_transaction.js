import BitcoinService from 'meklebar/models/bitcoin_service';
import { simpleCoinSelector } from 'meklebar/models/coin_selector';

var EscrowTransaction = Ember.Object.extend({
  source: null,
  mediator: null,
  receiver: null,
  amountBTC: "0.0",

  eckey: Ember.computed.alias('source.eckey'),

  amount: function() {
    return Bitcoin.Util.parseValue(this.get('amountBTC'));
  }.property('amountBTC'),

  fee: function() {
    return Bitcoin.Util.parseValue('0.0005');
  }.property('feeBTC'),

  interAmount: function() {
    return this.get('amount').add(this.get('fee')); // amount + redemption fee
  }.property('amount', 'fee'),

  totalAmount: function() {
    return this.get('interAmount').add(this.get('fee')); // intermediate amount + sending fee
  }.property('interAmount', 'fee'),

  enoughMoney: function() {
    var total = this.get('totalAmount').intValue();
    var balance = this.get('source.balance');

    return balance >= total;
  }.property('totalAmount', 'source.balance'),

  moreThanMin: function() {
    var total = this.get('totalAmount').intValue();

    return total > 1000000; // more than 0.01 BTC
  }.property('totalAmount'),

  validAmount: Ember.computed.and('moreThanMin', 'enoughMoney'),

  inputs: function() {
    var target = this.get('totalAmount').intValue();
    var inputs = this.get('source.unspent').slice(0);

    return simpleCoinSelector(target, inputs);
  }.property('totalAmount', 'source.unspent.@each'),

  inputTxs: function() {
    var _inputs = this.get('inputs');
    var inputs = _inputs[0];

    return inputs.map(function(input) {
      return Bitcoin.TransactionIn.fromJSON(input, false, true);
    });
  }.property('inputs.@each'),

  txAmountBytes: function() {
    return Bitcoin.Util.amountToBytes(this.get('interAmount'));
  }.property('interAmount'),

  escrowTx: function() {
    var value = this.get('txAmountBytes');
    var self = this;

    var pubkeys = ['source', 'mediator', 'receiver'].map(function(p) {
      return Crypto.util.hexToBytes(self.get(p).get('pubkey'));
    });

    return new Bitcoin.TransactionOut({
      value: value,
      script: Bitcoin.Script.createMultiSigOutputScript(2, pubkeys)
    });
  }.property('txAmountBytes', 'source.pubkey', 'mediator.pubkey', 'receiver.pubkey'),

  changeAmountBytes: function() {
    return Bitcoin.Util.amountToBytes(this.get('inputs')[1]);
  }.property('inputs.@each'),

  changeTx: function() {
    var change = this.get('inputs')[1];
    if (change <= 0) return;

    var value = this.get('changeAmountBytes');
    var sourceAddr = this.get('source.addr');

    return new Bitcoin.TransactionOut({
      value: value,
      script: Bitcoin.Script.createOutputScript(sourceAddr)
    });
  }.property('inputs.@each', 'changeAmountBytes', 'source.addr'),

  tx: function() {
    var change = this.get('inputs')[1];

    var tx = new Bitcoin.Transaction();
    var eckey = this.get('eckey');

    tx.addInputs(this.get('inputTxs'));

    var escrowTx = this.get('escrowTx');
    tx.addOutput(escrowTx);

    var changeTx = this.get('changeTx');
    if (changeTx) tx.addOutput(changeTx);

    tx.ins.forEach(function(input, index) {
      input.simpleSignScript(eckey, tx, index);
    });

    return tx;
  }.property('eckey', 'inputs.@each', 'inputTxs.@each', 'escrowTx', 'changeTx'),

  validTx: Ember.computed.and('validAmount', 'source.validSender', 'mediator.validParty', 'receiver.validParty'),

  hash: function() {
    if (!this.get('validTx')) return;

    var tx = this.get('tx');
    return Crypto.util.bytesToHex(tx.getHash().reverse());
  }.property('tx', 'validTx'),

  blockchainUrl: function() {
    var hash = this.get('hash');
    if (!hash) return;

    return BitcoinService.blockchainTxUrl(hash);
  }.property('hash'),

  bbe: function() {
    var tx = this.get('tx');
    if (!tx) return;

    var res = tx.toJSON();

    return JSON.stringify(res, null, 2);
  }.property('tx'),

  hex: function() {
    var tx = this.get('tx');
    if (!tx) return;
    return tx.hex();
  }.property('tx'),

  sendTx: function() {
    return BitcoinService.pushTx(this.get('hex'));
  }
});

export default EscrowTransaction;
