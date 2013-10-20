var ValidatedInput = Ember.Component.extend({
  classNameBindings: ['hasError', ':form-group'],
  label: null,
  value: null,
  valid: null,
  focusedIn: false,
  focusedOut: false,
  comp: '',
  'input-cols': '7',

  inputColClass: function() {
    return 'col-lg-' + this.get('input-cols');
  }.property('input-cols'),

  compView: function() {
    var comp = this.get('comp');
    var name;

    if (Ember.isEmpty(comp)) {
      name = 'validated-input-inner';
    } else {
      name = 'validated-' + comp + '-input-inner';
    }

    return App.__container__.lookup('component:' + name);
  }.property('comp'),

  invalid: Ember.computed.not('valid'),
  focusedInvalid: Ember.computed.and('focusedIn', 'invalid'),
  hasError: Ember.computed.and('focusedOut', 'invalid'),

  focusIn: function() {
    this.set('focusedIn', true);
  },

  focusOut: function() {
    this.set('focusedOut', true);
  }
});

export default ValidatedInput;
