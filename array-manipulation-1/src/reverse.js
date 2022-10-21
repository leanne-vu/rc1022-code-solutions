/* exported reverse */
// Define a function reverse with one parameter arrray : //
// assign an empty array to a variable //
// Use a for loop to begin at the end of the array//
// push elements in the descending increment of the array into the new array//
// return the new arrray//

function reverse(array) {
  var backwards = [];
  for (var i = array.length - 1; i >= 0; i--) {
    var element = array[i];
    backwards.push(element);
  } return backwards;
}
// Define a function reverse with one parameter array: //
// assign an empty array to a variable//
// use a for loop to begin the function at the end of the array//
// access each element of the array in the descending order//
// push each element into the empty arrray //
// return the new array//
