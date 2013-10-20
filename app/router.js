var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('send');
  this.resource('redeem');
  this.resource('approve');
});

export default Router;
