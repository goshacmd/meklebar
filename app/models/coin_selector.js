var simpleCoinSelector = function(target, inputs) {
  var sorted = inputs.sort(function(a, b) {
    return b.confirmations - a.confirmations;
  });

  var selected = [];
  var total = 0;

  inputs.forEach(function(input) {
    console.log('processing', input);
    if (total >= target) return;
    selected.push(input);
    total += input.value;
  });

  return [selected, total - target];
};

export { simpleCoinSelector };
