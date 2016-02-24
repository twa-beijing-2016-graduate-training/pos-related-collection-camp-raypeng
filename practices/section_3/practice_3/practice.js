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

function create_updated_collection(collection_a, object_b) {
  var collection_b = object_b.value;
  collection_a = count_same_elements(collection_a);
  collection_b.forEach(function(e) {
    for (var i = 0; i < collection_a.length; i++) {
      if (e === collection_a[i].key) {
        collection_a[i].count -= Math.floor(collection_a[i].count / 3);
        break;
      }
    }
  });
  return collection_a;
}

module.exports = create_updated_collection;
