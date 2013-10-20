import RedemptionTx from 'meklebar/models/redemption_tx';

var ApproveRoute = Ember.Route.extend({
  model: function() {
    return RedemptionTx.create();
  }
});

export default ApproveRoute;
