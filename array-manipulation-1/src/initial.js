/* exported initial */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    var elements = array[i];
    newArray.push(elements);
  } return newArray;

}
