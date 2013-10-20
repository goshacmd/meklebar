import BitcoinService from 'meklebar/models/bitcoin_service';

var Address = Ember.Object.extend({
  priv: null,

  privValidLength: Ember.computed.equal('priv.length', 51),
  privValid: Ember.computed.alias('privValidLength'),

  validSender: Ember.computed.alias('privValid'),
  validParty: Ember.computed.and('address', 'pubkey'),

  addrValid: Ember.computed.equal('address.length', 34),

  eckey: function() {
    if (!this.get('privValid')) return;
    return new Bitcoin.ECKey(this.get('priv'));
  }.property('priv'),

  address: function() {
    if (!this.get('privValid')) return;
    return this.get('eckey').getBitcoinAddress().toString();
  }.property('privValid', 'eckey'),

  addr: function() {
    return new Bitcoin.Address(this.get('address'));
  }.property('address'),

  unspent: null,

  balance: function() {
    var unspent = this.get('unspent');
    if (!unspent) return 0;
    return unspent.reduce(function(memo, item) {
      return memo + item.value;
    }, 0);
  }.property('unspent.@each.value'),

  balanceBTC: function() {
    return Bitcoin.Util.formatValue(this.get('balance'));
  }.property('balance'),

  pubkey: function(key, value) {
    if (arguments.length === 1) {
      if (this._pubkey) return this._pubkey;

      var privValid = this.get('privValid');
      var eckey = this.get('eckey');
      if (!privValid || !eckey) return;

      this._pubkey = Crypto.util.bytesToHex(eckey.getPub());

      return this._pubkey;
    } else {
      this._pubkey = value;

      if (value && value.length > 0) {
        this.set('address', Bitcoin.Address.fromPubKey(value).toString());
      }

      return value;
    }
  }.property('privValid', 'eckey'),

  pubKeyOrAddress: function(key, value) {
    if (arguments.length === 1) {
      return this._pkad;
    } else {
      if (value.length === 34) {
        this.set('address', value);
      } else if (value.length === 130) {
        this.set('pubkey', value);
      } else {
        this.set('address', '');
        this.set('pubkey', '');
      }

      return this._pkad = value;
    }
  }.property(),

  pkoaAddress: Ember.computed.equal('pubKeyOrAddress.length', 34),
  pkoaPubKey: Ember.computed.equal('pubKeyOrAddress.length', 130),

  noAddrNoPub: Ember.computed.not('validParty'),
  noPub: Ember.computed.empty('pubkey'),
  addrNoPub: Ember.computed.and('address', 'noPub'),

  getUnspent: function() {
    var addr = this.get('address');
    var self = this;
    // don't get unspent inputs if there is no address or private key on file
    if (!this.get('addrValid') || !this.get('privValid')) return this.set('unspent', []);

    BitcoinService.unspentInputsForAddress(addr).then(function(ar) {
      self.set('unspent', ar);
    });
  }.on('init').observes('address'),

  getPubkey: function() {
    var addr = this.get('address');
    var self = this;
    if (!this.get('addrValid') || this._pubkey) return;

    BitcoinService.pubKeyForAddress(addr).then(function(pk) {
      self.set('pubkey', pk);
    });
  }.observes('address')
});

export default Address;
