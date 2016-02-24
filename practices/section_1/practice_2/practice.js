function collect_same_elements(collection_a, collection_b) {
  var real_collection_b = [];
  collection_b.forEach(function(arr) {
    real_collection_b = real_collection_b + arr;
  });
  return collection_a.filter(function(e) {
    return real_collection_b.indexOf(e) != -1;
  });
}

module.exports = collect_same_elements;
