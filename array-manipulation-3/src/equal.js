/* exported equal */
// Define a function equal with two parameters, first and second//
// Use a for loop to loop through the first array //
// Use an if statement to find if the values are equal//
// if yes, return true//
// if not, return false//
function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    var hello = first[i];
    if (hello !== second[i] || first.length < second.length) { return false; }
  } return true;
}
// Define a function equal with two parameters, first and second//
// Use a for loop to loop through the first array//
// Use an if statement to check if the first array at that index in the loop
// does not equal the second array at that index . Or if the array lengths are different//
// return false if yes//
// return true if not//
