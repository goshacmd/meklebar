var ModalDialog = Ember.Component.extend({
  actions: {
    close: function() {
      this.container.lookup('route:application').send('closeModal');
    }
  }
});

export default ModalDialog;
