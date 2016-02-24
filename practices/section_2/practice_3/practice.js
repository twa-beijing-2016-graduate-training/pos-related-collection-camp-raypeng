function count_same_elements(collection) {
  var stats = {};
  collection.forEach(function(e) {
    var i, j;
    var num, symbol;
    if (e.indexOf('-') !== -1) {
      i = e.indexOf('-');
      num = parseInt(e.substring(i + 1));
      symbol = e.substring(0, i);
    } else if (e.indexOf(':') !== -1) {
      i = e.indexOf(':');
      num = parseInt(e.substring(i + 1));
      symbol = e.substring(0, i);
    } else if (e.indexOf('[') !== -1) {
      i = e.indexOf('['), j = e.indexOf(']');
      num = parseInt(e.substring(i + 1, j));
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
    counts.push({name: key, summary: stats[key]});
  }
  return counts;
}

module.exports = count_same_elements;
