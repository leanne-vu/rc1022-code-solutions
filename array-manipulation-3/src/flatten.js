/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray = newArray.concat(array[i]);

  } return newArray;
}
