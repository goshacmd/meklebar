import EscrowOut from 'meklebar/models/escrow_out';

var RedemptionInput = Ember.Object.extend({
  data: null,
  hash: Ember.computed.alias('data.hash'),

  escrowOut: function() {
    var data = this.get('data');
    if (!data) return;

    var out = data.out.find(function(o) {
      return o.scriptPubKey.match('OP_CHECKMULTISIG');
    });

    var newOut = JSON.parse(JSON.stringify(out));
    newOut.index = data.out.indexOf(out);
    newOut.hash = data.hash;

    return EscrowOut.create({ data: newOut });
  }.property('data.out.@')
});

export default RedemptionInput;
