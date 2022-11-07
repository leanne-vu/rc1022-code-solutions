/* exported unique */
function unique(array) {
  var a = [];
  for (var i = 0; i < array.length; i++) {
    if (a.indexOf(array[i]) === -1 && array[i] !== '') { a.push(array[i]); }
  }
  return a;
}
