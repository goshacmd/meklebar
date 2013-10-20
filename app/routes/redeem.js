import RedemptionTx from 'meklebar/models/redemption_tx';

var RedeemRoute = Ember.Route.extend({
  model: function() {
    return RedemptionTx.create();
  }
});

export default RedeemRoute;
