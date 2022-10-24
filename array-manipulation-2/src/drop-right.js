/* exported dropRight */
// Define function dropRight with two parameters, array and count//
// assign an empty array to a variable //
// use a for loop to loop through the variable, ending//
// the loop when it reaches the parameter count //
// push values at each index into new array //
// return new array//

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  } return newArray;
}

// Define function dropRight with two parameters: array and count//
// assign an empty array to a variable //
// use a for loop to cycle through the array until the total length - count from the end //
// push the array at each index into new array //
// return the new array //
