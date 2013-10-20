define("meklebar/app",
  ["resolver","meklebar/utils/register_components","meklebar/helpers/bitcoin"],
  function(Resolver, registerComponents, _) {
    "use strict";


    var App = Ember.Application.extend({
      LOG_ACTIVE_GENERATION: true,
      LOG_MODULE_RESOLVER: true,
      LOG_TRANSITIONS: true,
      LOG_TRANSITIONS_INTERNAL: true,
      LOG_VIEW_LOOKUPS: true,
      modulePrefix: 'meklebar',
      Resolver: Resolver
    });

    App.initializer({
      name: 'Register Components',
      initialize: function(container, application) {
        registerComponents(container);
      }
    });


    return App;
  });
define("meklebar/components/make_inner",
  [],
  function() {
    "use strict";
    var makeInner = function(klass, additional) {
      var instance = klass.create();
      var attrs = instance.attributeBindings;
      var attrMap = {};

      attrs.concat(additional).forEach(function(attr) {
        if (attr === "type") return;
        attrMap[attr] = Ember.computed.alias('parentView.' + attr);
      });

      return klass.extend(attrMap);
    };


    return makeInner;
  });
define("meklebar/components/modal-dialog",
  [],
  function() {
    "use strict";
    var ModalDialog = Ember.Component.extend({
      actions: {
        close: function() {
          this.container.lookup('route:application').send('closeModal');
        }
      }
    });


    return ModalDialog;
  });
define("meklebar/components/number-input",
  [],
  function() {
    "use strict";
    var NumberInput = Ember.TextField.extend({
      type: 'number',
      attributeBindings: ['min', 'max', 'step']
    });


    return NumberInput;
  });
define("meklebar/components/validated-input-inner",
  ["meklebar/components/make_inner"],
  function(makeInner) {
    "use strict";

    var ValidatedInputInner = makeInner(Ember.TextField);


    return ValidatedInputInner;
  });
define("meklebar/components/validated-input",
  [],
  function() {
    "use strict";
    var ValidatedInput = Ember.Component.extend({
      classNameBindings: ['hasError', ':form-group'],
      label: null,
      value: null,
      valid: null,
      focusedIn: false,
      focusedOut: false,
      comp: '',
      'input-cols': '7',

      inputColClass: function() {
        return 'col-lg-' + this.get('input-cols');
      }.property('input-cols'),

      compView: function() {
        var comp = this.get('comp');
        var name;

        if (Ember.isEmpty(comp)) {
          name = 'validated-input-inner';
        } else {
          name = 'validated-' + comp + '-input-inner';
        }

        return App.__container__.lookup('component:' + name);
      }.property('comp'),

      invalid: Ember.computed.not('valid'),
      focusedInvalid: Ember.computed.and('focusedIn', 'invalid'),
      hasError: Ember.computed.and('focusedOut', 'invalid'),

      focusIn: function() {
        this.set('focusedIn', true);
      },

      focusOut: function() {
        this.set('focusedOut', true);
      }
    });


    return ValidatedInput;
  });
define("meklebar/components/validated-number-input-inner",
  ["meklebar/components/make_inner","meklebar/components/number-input"],
  function(makeInner, NumberInput) {
    "use strict";

    var ValidatedNumberInputInner = makeInner(NumberInput);


    return ValidatedNumberInputInner;
  });
define("meklebar/components/validated-textarea-input-inner",
  ["meklebar/components/make_inner"],
  function(makeInner) {
    "use strict";

    var ValidatedTextAreaInputInner = makeInner(Ember.TextArea, ['value']);


    return ValidatedTextAreaInputInner;
  });
define("meklebar/components/validation-glyphicon",
  [],
  function() {
    "use strict";
    var ValidationGlyphicon = Ember.Component.extend({
      tagName: 'span',
      condition: null,
      classNameBindings: ['condition:glyphicon-ok:glyphicon-remove', ':glyphicon']
    });


    return ValidationGlyphicon;
  });
define("meklebar/controllers/approve",
  [],
  function() {
    "use strict";
    var ApproveController = Ember.ObjectController.extend({
      actions: {
        sign: function() {
          if (!this.get('signature.valid')) return;

          this.set('showSignature', true);
        },

        reset: function() {
          this.setProperties({ code: null, showSignature: false });
        }
      },

      code: '',

      codeData: function() {
        var code = this.get('code');
        if (Ember.isEmpty(code)) return;

        var data = atob(code.trim()).split(':');
        if (data.length !== 2 || data[0].length !== 64) return;

        return { txHash: data[0], redeemAddr: data[1] };
      }.property('code'),

      codeValid: Ember.computed.notEmpty('codeData'),
      hasDetails: Ember.computed.and('amount', 'address'),

      codeDataChnaged: function() {
        var data = this.get('codeData') || {};

        this.set('inputHash', data.txHash);
        this.set('address', data.redeemAddr);
      }.observes('codeData'),

      signature: function() {
        return this.get('model').createSignature();
      }.property('hashForSignature', 'bytePubKeys'),

      blockchainUrl: function() {
        var hash = this.get('inputHash');
        if (Ember.isEmpty(hash)) return;

        return 'http://blockchain.info/tx/' + hash;
      }.property('inputHash')
    });


    return ApproveController;
  });
define("meklebar/controllers/redeem",
  [],
  function() {
    "use strict";
    var RedeemController = Ember.ObjectController.extend({
      actions: {
        redeem: function() {
          if (!this.get('model.validRequest') || !confirm('Are you sure?')) return;

          var self = this;
          this.set('error', null);
          this.set('sendingTx', true);

          this.get('model').sendTx().then(function() {
            self.set('sendingTx', false);
            self.set('pushSuccess', true);
          }, function(error) {
            self.set('sendingTx', false);
            self.set('error', error.resp + ' (' + error.code + ')');
          });
        },

        reset: function() {
          this.set('pushSuccess', null);
          this.setProperties({ inputHash: '', address: '' });
        }
      },

      pushSuccess: null,
      error: null,
      sendingTx: null,

      invalidRequest: Ember.computed.not('validRequest'),
      redeemDisabled: Ember.computed.or('invalidRequest', 'sendingTx')
    });


    return RedeemController;
  });
define("meklebar/controllers/send",
  [],
  function() {
    "use strict";
    var SendController = Ember.ObjectController.extend({
      actions: {
        sendTx: function() {
          if (!this.get('model.validTx') || !confirm('Are you sure?')) return;

          var self = this;
          this.set('error', null);
          this.set('sendingTx', true);

          this.get('model').sendTx().then(function() {
            self.set('sendingTx', false);
            self.set('pushSuccess', true);
          }, function(reason) {
            self.set('sendingTx', false);
            self.set('error', reason);
          });
        },

        reset: function() {
          this.set('pushSuccess', null);
          this.set('model.amountBTC', '0.0');
          this.set('model.source.priv', '');
          this.set('model.receiver.pubKeyOrAddress', '');
          this.set('model.mediator.pubKeyOrAddress', '');
        }
      },

      pushSuccess: null,
      error: null,
      sendingTx: null,

      invalidTx: Ember.computed.not('validTx'),
      sendDisabled: Ember.computed.or('invalidTx', 'sendingTx')
    });


    return SendController;
  });
define("meklebar/helpers/bitcoin",
  [],
  function() {
    "use strict";
    Ember.Handlebars.helper('btcValue', function(satoshis) {
      if (typeof satoshis !== 'string') satoshis = '' + satoshis;
      return Bitcoin.Util.formatValue(satoshis);
    });

  });
define("meklebar/models/address",
  ["meklebar/models/bitcoin_service"],
  function(BitcoinService) {
    "use strict";

    var Address = Ember.Object.extend({
      priv: null,

      privValidLength: Ember.computed.equal('priv.length', 51),
      privValid: Ember.computed.alias('privValidLength'),

      validSender: Ember.computed.alias('privValid'),
      validParty: Ember.computed.and('address', 'pubkey'),

      addrValid: Ember.computed.equal('address.length', 34),

      eckey: function() {
        if (!this.get('privValid')) return;
        return new Bitcoin.ECKey(this.get('priv'));
      }.property('priv'),

      address: function() {
        if (!this.get('privValid')) return;
        return this.get('eckey').getBitcoinAddress().toString();
      }.property('privValid', 'eckey'),

      addr: function() {
        return new Bitcoin.Address(this.get('address'));
      }.property('address'),

      unspent: null,

      balance: function() {
        var unspent = this.get('unspent');
        if (!unspent) return 0;
        return unspent.reduce(function(memo, item) {
          return memo + item.value;
        }, 0);
      }.property('unspent.@each.value'),

      balanceBTC: function() {
        return Bitcoin.Util.formatValue(this.get('balance'));
      }.property('balance'),

      pubkey: function(key, value) {
        if (arguments.length === 1) {
          if (this._pubkey) return this._pubkey;

          var privValid = this.get('privValid');
          var eckey = this.get('eckey');
          if (!privValid || !eckey) return;

          this._pubkey = Crypto.util.bytesToHex(eckey.getPub());

          return this._pubkey;
        } else {
          this._pubkey = value;

          if (value && value.length > 0) {
            this.set('address', Bitcoin.Address.fromPubKey(value).toString());
          }

          return value;
        }
      }.property('privValid', 'eckey'),

      pubKeyOrAddress: function(key, value) {
        if (arguments.length === 1) {
          return this._pkad;
        } else {
          if (value.length === 34) {
            this.set('address', value);
          } else if (value.length === 130) {
            this.set('pubkey', value);
          } else {
            this.set('address', '');
            this.set('pubkey', '');
          }

          return this._pkad = value;
        }
      }.property(),

      pkoaAddress: Ember.computed.equal('pubKeyOrAddress.length', 34),
      pkoaPubKey: Ember.computed.equal('pubKeyOrAddress.length', 130),

      noAddrNoPub: Ember.computed.not('validParty'),
      noPub: Ember.computed.empty('pubkey'),
      addrNoPub: Ember.computed.and('address', 'noPub'),

      getUnspent: function() {
        var addr = this.get('address');
        var self = this;
        // don't get unspent inputs if there is no address or private key on file
        if (!this.get('addrValid') || !this.get('privValid')) return this.set('unspent', []);

        BitcoinService.unspentInputsForAddress(addr).then(function(ar) {
          self.set('unspent', ar);
        });
      }.on('init').observes('address'),

      getPubkey: function() {
        var addr = this.get('address');
        var self = this;
        if (!this.get('addrValid') || this._pubkey) return;

        BitcoinService.pubKeyForAddress(addr).then(function(pk) {
          self.set('pubkey', pk);
        });
      }.observes('address')
    });


    return Address;
  });
define("meklebar/models/bitcoin_service",
  [],
  function() {
    "use strict";
    var BitcoinService = Ember.Object.extend();

    BitcoinService.reopenClass({
      pubKeyForAddress: function(address) {
        var url = 'https://blockchain.info/q/pubkeyaddr/' + address + '?cors=true';
        return $.ajax(url).then(function(data) {
          if (data.length === 130) return data;
        }, function(xhr) {
          return xhr.responseText;
        });
      },

      unspentInputsForAddress: function(address) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
          var url = 'https://blockchain.info/unspent?cors=true&address=' + address;
          $.ajax(url).then(function(data) {
            resolve(data.unspent_outputs || []);
          }, function(xhr, status) {
            if (xhr.responseText === "No free outputs to spend") {
              resolve([]);
            } else {
              reject(xhr.responseText);
            }
          });
        });
      },

      pushTx: function(hexTx) {
        var url = 'https://blockchain.info/pushtx?cors=true';
        return $.ajax(url, { type: 'POST', data: { tx: hexTx } }).then(undefined, function(xhr) {
          return xhr.responseText;
        });
      },

      pushMultisigTx: function(hexTx) {
        // blockchain.info doesn't sent transactions that spend multisig input for
        // some weird reason - https://github.com/blockchain/My-Wallet/issues/41
        // coinbin's API isn't public and it may break any time. this method needs
        // to be updated when #41 gets fixed or when someone finds a web API for
        // pushing tx's that supports multisig. FIXME

        return new Ember.RSVP.Promise(function(resolve, reject) {
          var url = 'https://coinb.in/api/';
          var uid = '1';
          var key = '12345678901234567890123456789012';

          var data = 'uid='+uid+'&key='+key+'&setmodule=bitcoin&request=sendrawtransaction&rawtx='+hexTx;

          return $.ajax(url + '?' + data).then(function(data) {
            var code = data.getElementsByTagName("result")[0].childNodes[0].nodeValue;
            code = parseInt(code, 10);
            var resp = data.getElementsByTagName("response")[0].childNodes[0].nodeValue;
            resp = decodeURIComponent(resp).replace(/\+/g, ' ');

            // it's weird. coinbin responses with this error message when actually
            // the transaction went through seccessfully
            if (code === 0 && resp === "unexpected error, try again in a moment") {
              resolve();
            } else {
              reject({ code: code, resp: resp });
            }
          });
        });
      },

      txFromHash: function(hash) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
          var url = 'http://www.corsproxy.com/blockexplorer.com/rawtx/' + hash;
          $.get(url, function(data) {
            resolve(JSON.parse(data));
          });
        });
      },

      blockchainTxUrl: function(hash) {
        return 'https://blockchain.info/tx/' + hash;
      }
    });


    return BitcoinService;
  });
define("meklebar/models/coin_selector",
  ["exports"],
  function(__exports__) {
    "use strict";
    var simpleCoinSelector = function(target, inputs) {
      var sorted = inputs.sort(function(a, b) {
        return b.confirmations - a.confirmations;
      });

      var selected = [];
      var total = 0;

      inputs.forEach(function(input) {
        console.log('processing', input);
        if (total >= target) return;
        selected.push(input);
        total += input.value;
      });

      return [selected, total - target];
    };


    __exports__.simpleCoinSelector = simpleCoinSelector;
  });
define("meklebar/models/escrow_out",
  [],
  function() {
    "use strict";
    var EscrowOut = Ember.Object.extend({
      data: null,

      amount: Ember.computed.alias('data.value'),

      scriptTokens: function() {
        var data = this.get('data');
        return data.scriptPubKey.split(' ');
      }.property('data.scriptPubKey'),

      signaturesNeeded: function() {
        var tokens = this.get('scriptTokens');
        return parseInt(tokens[0], 10);
      }.property('scriptTokens'),

      signers: function() {
        var tokens = this.get('scriptTokens');
        return tokens.slice(1, tokens.length - 2);
      }.property('scriptTokens'),

      numSigners: Ember.computed.alias('signers.length'),

      txIn: function() {
        var data = this.get('data');

        return Bitcoin.TransactionIn.fromJSON({
          tx_hash: data.hash,
          tx_output_n: data.index,
          script: data.scriptPubKey
        }, true);
      }.property('data.hash', 'data.index', 'data.scriptPubKey')
    });


    return EscrowOut;
  });
define("meklebar/models/escrow_transaction",
  ["meklebar/models/coin_selector","meklebar/models/bitcoin_service"],
  function(__dependency1__, BitcoinService) {
    "use strict";
    var simpleCoinSelector = __dependency1__.simpleCoinSelector;

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


    return EscrowTransaction;
  });
define("meklebar/models/redemption_input",
  ["meklebar/models/escrow_out"],
  function(EscrowOut) {
    "use strict";

    var RedemptionInput = Ember.Object.extend({
      data: null,
      hash: Ember.computed.alias('data.hash'),

      escrowOut: function() {
        var data = this.get('data');
        if (!data) return;

        var out = data.out.find(function(o) {
          return o.scriptPubKey.match('OP_CHECKMULTISIG');
        });

        var newOut = JSON.parse(JSON.stringify(out));
        newOut.index = data.out.indexOf(out);
        newOut.hash = data.hash;

        return EscrowOut.create({ data: newOut });
      }.property('data.out.@')
    });


    return RedemptionInput;
  });
define("meklebar/models/redemption_tx",
  ["meklebar/models/bitcoin_service","meklebar/models/escrow_out","meklebar/models/signature"],
  function(BitcoinService, RedemptionInput, Signature) {
    "use strict";

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


    return RedemptionTx;
  });
define("meklebar/models/signature",
  [],
  function() {
    "use strict";
    var Signature = Ember.Object.extend({
      number: null,
      hash: null,
      eckey: null,
      publicKeys: null,

      label: function() {
        return 'Signature #' + this.get('number');
      }.property('number'),

      placeholder: function() {
        return 'Private key or signature #' + this.get('number');
      }.property('number'),

      validPublic: function() {
        var hash = this.get('hash');
        var signature = this.get('signature');
        var keys = this.get('publicKeys');
        if (!hash || Ember.isEmpty(signature) || !keys) return;

        return keys.find(function(key) {
          try {
            return Bitcoin.ECDSA.verify(hash, signature, key);
          } catch (err) {
            return false;
          }
        });
      }.property('hash', 'signature', 'publicKeys.@each'),

      valid: Ember.computed.notEmpty('validPublic'),

      signature: function(key, value, old) {
        if (arguments.length === 1) {
          var eckey = this.get('eckey');
          var hash = this.get('hash');

          if (eckey && hash) {
            var signature = eckey.sign(hash);
            signature.push(1);

            return signature;
          } else {
            return old;
          }
        } else {
          return value ? Crypto.util.hexToBytes(value) : null;
        }
      }.property('hash', 'eckey'),

      hex: function() {
        var signature = this.get('signature');
        if (!signature) return;
        return Crypto.util.bytesToHex(signature);
      }.property('signature'),

      signatureOrKey: function(key, value, old) {
        if (arguments.length === 1) {
          return old;
        } else {
          if (value.length === 51) {
            this.set('signature', null);
            this.set('eckey', new Bitcoin.ECKey(value));
          } else if (value.length > 52) {
            this.set('eckey', null);
            this.set('signature', value);
          } else {
            this.set('eckey', null);
            this.set('signature', null);
          }

          return value;
        }
      }.property()
    });


    return Signature;
  });
define("meklebar/router",
  [],
  function() {
    "use strict";
    var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

    Router.map(function() {
      this.resource('send');
      this.resource('redeem');
      this.resource('approve');
    });


    return Router;
  });
define("meklebar/routes/application",
  [],
  function() {
    "use strict";
    var ApplicationRoute = Ember.Route.extend({
      actions: {
        openModal: function(modalName) {
          return this.render(modalName, {
            into: 'application',
            outlet: 'modal'
          });
        },

        closeModal: function() {
          return this.disconnectOutlet({
            outlet: 'modal',
            parentView: 'application'
          });
        }
      }
    });


    return ApplicationRoute;
  });
define("meklebar/routes/approve",
  ["meklebar/models/redemption_tx"],
  function(RedemptionTx) {
    "use strict";

    var ApproveRoute = Ember.Route.extend({
      model: function() {
        return RedemptionTx.create();
      }
    });


    return ApproveRoute;
  });
define("meklebar/routes/redeem",
  ["meklebar/models/redemption_tx"],
  function(RedemptionTx) {
    "use strict";

    var RedeemRoute = Ember.Route.extend({
      model: function() {
        return RedemptionTx.create();
      }
    });


    return RedeemRoute;
  });
define("meklebar/routes/send",
  ["meklebar/models/escrow_transaction","meklebar/models/address"],
  function(EscrowTransaction, Address) {
    "use strict";

    var SendRoute = Ember.Route.extend({
      model: function() {
        return EscrowTransaction.create({
          source: Address.create(),
          mediator: Address.create({ address: "" }),
          receiver: Address.create({ address: "" })
        });
      }
    });


    return SendRoute;
  });
define("meklebar/utils/register_components",
  [],
  function() {
    "use strict";
    /* global requirejs */
    /* global require */

    function registerComponents(container) {
      var seen = requirejs._eak_seen;
      var templates = seen, match;
      if (!templates) { return; }

      for (var prop in templates) {
        if (match = prop.match(/templates\/components\/(.*)$/)) {
          require(prop, null, null, true);
          registerComponent(container, match[1]);
        }
      }
    }


    function registerComponent(container, name) {
      Ember.assert("You provided a template named 'components/" + name + "', but custom components must include a '-'", name.match(/-/));

      var fullName         = 'component:' + name,
          templateFullName = 'template:components/' + name;

      container.injection(fullName, 'layout', templateFullName);

      var Component = container.lookupFactory(fullName);

      if (!Component) {
        container.register(fullName, Ember.Component);
        Component = container.lookupFactory(fullName);
      }

      Ember.Handlebars.helper(name, Component);
    }


    return registerComponents;
  });
define("meklebar/views/nav",
  [],
  function() {
    "use strict";
    var NavView = Ember.View.extend({
      didInsertElement: function() {
        this.$('[data-toggle=collapse]').collapse();
      }
    });


    return NavView;
  });
//@ sourceMappingURL=app.js.map