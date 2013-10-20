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

export default EscrowOut;
