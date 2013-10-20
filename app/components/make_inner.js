var makeInner = function(klass, additional) {
  var instance = klass.create();
  var attrs = instance.attributeBindings;
  var attrMap = {};

  attrs.concat(additional).forEach(function(attr) {
    if (attr === "type") return;
    attrMap[attr] = Ember.computed.alias('parentView.' + attr);
  });

  return klass.extend(attrMap);
};

export default makeInner;
