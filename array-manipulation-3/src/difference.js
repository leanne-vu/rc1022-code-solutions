/* exported difference */
// Define a function difference with two parameters, first and second
// Assign an empty array to a variable
// Use a for loop to go through the first array length,
// Use an if statementt.  Use the indexof method of the array to check
// if the array equals 0 . If yes, push into new array.

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
// Define a function difference with two parameters, first and second
// assign an empty array to a variable
// use a for loop to go through the first array
// use an if statement to check if the second array  has an indexof each
// of the first array's indexes   (-1) . Push into new array if it matches condition
// repeat steps for the second array. Check if the first array has an index of the second -1
// push the second array matches into the new array.
// return new array.
