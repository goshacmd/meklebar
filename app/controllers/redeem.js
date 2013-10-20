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

export default RedeemController;
