/* exported includesSeven */
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    var index = array[i];
    if (index === 7) { return true; }
  } return false;
}
