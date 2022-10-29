/* exported intersection */
function intersection(first, second) {
  var set1 = new Set(first);
  var set2 = new Set(second);

  var intersection = [...set1].filter(element => set2.has(element));
  return intersection;
}
