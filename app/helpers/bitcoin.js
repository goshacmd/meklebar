Ember.Handlebars.helper('btcValue', function(satoshis) {
  if (typeof satoshis !== 'string') satoshis = '' + satoshis;
  return Bitcoin.Util.formatValue(satoshis);
});
