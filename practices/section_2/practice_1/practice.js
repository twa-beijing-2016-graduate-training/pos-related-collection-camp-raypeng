function count_same_elements(collection) {
  var stats = {};
  collection.forEach(function(symbol) {
    if (symbol in stats) {
      stats[symbol] += 1;
    } else {
      stats[symbol] = 1;
    }
  });
  var counts = [];
  for (key in stats) {
    counts.push({key: key, count: stats[key]});
  }
  return counts;
}

module.exports = count_same_elements;
