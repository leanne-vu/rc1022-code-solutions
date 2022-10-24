/* exported numVowels */
// Define a function numVowels with one parameter, a string//
// use a for loop to transverse string at each character //
// use an if statement to search for vowels //
// returrn number of vowels based on string index ?? //
function numVowels(string) {
  var number = 0;
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
      number++;
    }
  } return number;
}

// Define a function numVowels with one parmeter, string//
// assign the number 0 to a variable //
// use a for loop too loop through the string //
// assign the string at each index to a variable //
// use an if statement to check for the vowels (capital & lower case at each index)//
// return the number +1 per the condition //
// return the number after the loop is done //
