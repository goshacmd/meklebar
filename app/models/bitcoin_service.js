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

export default BitcoinService;
