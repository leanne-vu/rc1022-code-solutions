/* exported union */
// Define a function union with two parameters, first and second
// set the first array into a set.  filter  the iteration of the set  and filter
// for if the second set of  the second array doesn't have the same element.
// return
// do  the same for the second and concat arrays.
// Return the new array
function union(first, second) {
  var a = [];
  for (var i = 0; i < first.length; i++) {
    a.push(first[i]);
  }
  for (var z = 0; z < second.length; z++) {
    if (a.indexOf(second[z]) === -1 && second[z] !== '') { a.push(second[z]); }
  } return a;
}
// Define a function union with two parameters , first and second.
// Assign an empty array to a variable.
// Use a for loop for the first array. Push the indexes of the array into the empty variable
// Use another for loop for the second array.
// Use an if statement. Use the indexOf method to compare our new array with each index
// of the second array. If it does not match (-1) and is not empty (''), push each
// index into the new array.
// return array
