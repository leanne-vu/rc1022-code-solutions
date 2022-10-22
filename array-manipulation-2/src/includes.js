/* exported includes */
// Define a function includes with the parameters array and value //
// use a for loop to access each index of the array //
// use an if statement to check if the value is present at the index //
// return true if it is and use else statement to return false if it is not//

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (value === element) { return true; }
  } return false;
}
// Define a function includes with two parameters, array and value ://
// use a for loop to loop through the entire length of the array//
// assign the index of the array to a variable //
// use an if statement , if the value entered is equal to the variable at that index//
// return true//
// return false when the loop is over if there were no true returns during//
