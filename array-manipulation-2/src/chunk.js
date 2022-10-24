/* exported chunk */
function chunk(array, size) {
  var finalArray = [];

  for (var i = 0; i < array.length; i += size) {
    finalArray.push(array.slice(i, i + size));
  } return finalArray;
}
