/* exported capitalize */
// Define function capitalize with one parameter, word: //
// assign a variable with the first index of the word //
// Use the toUpperCase method of the object on the previous variable//
// return the variable..
function capitalize(word) {
  word = word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  return word;
}
// Define function capitalize with one parameter, word: //
// Use substring mehtod of the word to use the toUpperCase//
// method on just the first letter.  Then, add the rest of the object back lowercase//
// using the substring method and the toLowerCase method.
