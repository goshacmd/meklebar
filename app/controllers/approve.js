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

export default ApproveController;
