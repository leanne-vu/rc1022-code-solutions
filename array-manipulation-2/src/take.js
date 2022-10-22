/* exported take */
// Define function take with two parameters: array and count //
// assign an empty array to a variable //
// use a for loop to go through the array according to the count //
// push the index of the specific count into the new array//
// return new array//

function take(array, count) {
  var newArray = [];
  for (var i = 0; i <= count - 1; i++) {
    var element = array[i];
    if (element || element === true || element === false) {
      newArray.push(element);
    } else { return []; }
  } return newArray;
}

// Define function take with two variables : array and count //
// assign an empty array to a variable //
// use a for loop to run through an array the amount of times specified in count (last index) //
// set the index of the array to a variable //
// use an if statement with the condition that if the element is a truthy or returns a boolean//
// it will be pushed into the new array//
// use an else statement so if the array is empty, it'll return an empty array//
