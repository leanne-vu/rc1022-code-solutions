/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element) { newArray.push(element); }
  } return newArray;
}
