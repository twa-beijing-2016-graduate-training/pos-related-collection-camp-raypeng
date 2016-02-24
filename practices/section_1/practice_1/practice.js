function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(function(e) {
    return collection_b.indexOf(e) != -1;
  });
}

module.exports = collect_same_elements;
