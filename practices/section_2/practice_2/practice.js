function count_same_elements(collection) {
  var stats = {};
  collection.forEach(function(e) {
    var i = e.indexOf('-');
    var num, symbol;
    if (i !== -1) {
      num = parseInt(e.substring(i + 1));
      symbol = e.substring(0, i);
    } else {
      num = 1;
      symbol = e;
    }
    if (symbol in stats) {
      stats[symbol] += num;
    } else {
      stats[symbol] = num;
    }
  });
  var counts = [];
  for (key in stats) {
    counts.push({key: key, count: stats[key]});
  }
  return counts;
}

module.exports = count_same_elements;
