/* exported truncate */
// Define a function truncate with two parameters : length and string //
// Using the slice method of the object, start at the beginning of the string//
// and end it at the length specified//
// add elipses to this new string //

function truncate(length, string) {
  var hello = string.slice(string[0], length);
  return hello + '...';
}

// Define a function truncate with two parameters : length and string //
// Use the slice method of the object on the string , starting at the first index//
// of the string to the length specified //
// assign this value to a variable //
// returrn the variable and the concatanation of there elipses//
