/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    var element = array[i];
    newArray.push(element);
  } return newArray;
}
