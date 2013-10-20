import EscrowTransaction from 'meklebar/models/escrow_transaction';
import Address from 'meklebar/models/address';

var SendRoute = Ember.Route.extend({
  model: function() {
    return EscrowTransaction.create({
      source: Address.create(),
      mediator: Address.create({ address: "" }),
      receiver: Address.create({ address: "" })
    });
  }
});

export default SendRoute;
