/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    var element = array[i];
    if (array.length < count) { return array; } newArray.push(element);
  } return newArray;
}
