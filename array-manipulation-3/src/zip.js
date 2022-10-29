/* exported zip */
// Define function zip with two parameters, first and second //
// Assign an empty array to a variable//
// Assign a second empty array to a variable//
// loop through the first and second arrays and push into the second variable //
// Use concat to combine the second array with the first array, repeat loop//
// return large , first variable array//

function zip(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (first.length <= second.length) {
      var pair = [first[i], second[i]];
      newArray.push(pair);
    }
  }
  if (first.length > second.length) {
    for (var z = 0; z < second.length; z++) {
      pair = [first[z], second[z]];
      newArray.push(pair);
    }
  } return newArray;
}

// Define a function zip with two parameters, first and second
// Assign an empty arrray to a variable
// Use a for loop to go through the first array , use an if statement
// so if the first length is smaller or equal to the second array, it will perform the ConvolverNode
// put the first array at index i and the second array at index i into an array pair and assign that to a variable
// push that pair into the empty array variable .
// Use a second if statement. If the first array's length is larger than the second's
// run a for loop that stops on the second array's length-1 instead.
// assign both array indexes to an array and push into the empty array.
// return the  new array
