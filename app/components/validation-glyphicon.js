var ValidationGlyphicon = Ember.Component.extend({
  tagName: 'span',
  condition: null,
  classNameBindings: ['condition:glyphicon-ok:glyphicon-remove', ':glyphicon']
});

export default ValidationGlyphicon;
