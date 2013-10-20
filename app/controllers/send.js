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

export default SendController;
