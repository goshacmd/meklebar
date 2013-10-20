var Signature = Ember.Object.extend({
  number: null,
  hash: null,
  eckey: null,
  publicKeys: null,

  label: function() {
    return 'Signature #' + this.get('number');
  }.property('number'),

  placeholder: function() {
    return 'Private key or signature #' + this.get('number');
  }.property('number'),

  validPublic: function() {
    var hash = this.get('hash');
    var signature = this.get('signature');
    var keys = this.get('publicKeys');
    if (!hash || Ember.isEmpty(signature) || !keys) return;

    return keys.find(function(key) {
      try {
        return Bitcoin.ECDSA.verify(hash, signature, key);
      } catch (err) {
        return false;
      }
    });
  }.property('hash', 'signature', 'publicKeys.@each'),

  valid: Ember.computed.notEmpty('validPublic'),

  signature: function(key, value, old) {
    if (arguments.length === 1) {
      var eckey = this.get('eckey');
      var hash = this.get('hash');

      if (eckey && hash) {
        var signature = eckey.sign(hash);
        signature.push(1);

        return signature;
      } else {
        return old;
      }
    } else {
      return value ? Crypto.util.hexToBytes(value) : null;
    }
  }.property('hash', 'eckey'),

  hex: function() {
    var signature = this.get('signature');
    if (!signature) return;
    return Crypto.util.bytesToHex(signature);
  }.property('signature'),

  signatureOrKey: function(key, value, old) {
    if (arguments.length === 1) {
      return old;
    } else {
      if (value.length === 51) {
        this.set('signature', null);
        this.set('eckey', new Bitcoin.ECKey(value));
      } else if (value.length > 52) {
        this.set('eckey', null);
        this.set('signature', value);
      } else {
        this.set('eckey', null);
        this.set('signature', null);
      }

      return value;
    }
  }.property()
});

export default Signature;
