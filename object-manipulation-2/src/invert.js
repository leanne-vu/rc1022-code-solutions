/* exported invert */
// Define function invert with one parameter , source //
// assign an empty object to a variable//
// use a for in loop to get the keys of the source //
// return the keys of the source and the values of the key in inverted order//
function invert(source) {
  var newObject = {};
  for (var key in source) {
    newObject[source[key]] = key;
  } return newObject;
}
// Define a function invert with one parameter, source.
// Assign an empty object to a variable
// use a for in loop to loop through each key in source.
// for each loop, assign the key as the value of the object's value
// for the new object.  return the new object
