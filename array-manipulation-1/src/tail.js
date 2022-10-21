/* exported tail */
// Define a function tail with one parameter array: //
// assign an empty array to a variable //
// use a for loop to access all indexes of an array after the first index//
// return the array//

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) { var element = array[i]; newArray.push(element); }
  return newArray;
}
// Define a function tail with one parameter array://
// assign an empty array to a variable//
// use a for loop to access all elements of an array after the first index //
// push values at each index into the new array //
// return the new array //
