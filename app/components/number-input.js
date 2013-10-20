var NumberInput = Ember.TextField.extend({
  type: 'number',
  attributeBindings: ['min', 'max', 'step']
});

export default NumberInput;
