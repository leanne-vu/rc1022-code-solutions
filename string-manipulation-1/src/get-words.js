/* exported getWords */
// Define a function getWords with one parameter, string//
// assign an empty array to a variable //
// Use splice to remove all empty spaces in the string //
// Use split to return the remaining string as a new array//
// push array into empty array variable //
// return new array//

function getWords(string) {
  if (string === '') { return []; }
  var array = string.split(' ');
  return array;
}

// Define a function getWords with one parameter, string.  //
// Use an if statement so if the string is empty, it returns an empty array//
// Use the split method of the object on the input to take out all spaces and assign//
// that to a variable//
// return variable (split automatically returns an array already)//
