/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    var key = array[i];
    if (value === key) { return i; }
  } return -1;
}
