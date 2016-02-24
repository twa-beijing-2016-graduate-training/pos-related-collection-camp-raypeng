function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(function(e) {
    return object_b.value.indexOf(e) != -1;
  });
}

module.exports = collect_same_elements;
