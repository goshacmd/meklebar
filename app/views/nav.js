var NavView = Ember.View.extend({
  didInsertElement: function() {
    this.$('[data-toggle=collapse]').collapse();
  }
});

export default NavView;
