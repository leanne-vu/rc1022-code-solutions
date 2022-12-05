/* exported isPalindromic */
// Define a function isPalindromic with one parameter, string
// Use a for loop to go through the string backwards ,
// Put the backward string into a variable.
// Use an if statement to compare the variable and the original parameter
// Return true if true or false if not.

function isPalindromic(string) {
  for (var i = 0; i < string.length; i++) {
    string = string.replace(' ', '');
    if (string[i] !== string[string.length - 1 - i]) {

      return false;
    }
  } return true;
}
// Define a function isPalindromic with one parameter, string
// Use a for loop to loop through the entire length of the string
// Use the replace method of the string to take out any spaces
// Use an if statement, if the beginning of the string and the end of the string
// at each increment do not match, return false. Else, return true.
