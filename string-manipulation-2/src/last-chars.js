/* exported lastChars */
// Define function lastChars with two parameters, length and string//
// Assign an empty string to a variable. //
// use a for loop to start at the length entered and transverse the entire string//
// add the string at indicated index to the empty string variable//
// if length is greater than the string length ,return the string as is//
// return the new string when loop is done.//
function lastChars(length, string) {
  var newString = '';
  for (var i = string.length - length; i < string.length; i++) {
    newString += string[i];
    if (length > string.length) {
      return string;
    }
  } return newString;
}
// Define function lastChars with two parameters, length and string //
// assign an empty string to a variable. //
// use a for loop.  Initialize the loop at indicated length and continue through string//
// add each character to the empty string//
// if the length is greater than the string length //
// return string as is //
// return new string outside of loop//
