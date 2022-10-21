/* exported toObject */
// Define a function toObject with one parameter keyValuePair //
// Access each index of tthe array with a for loop //
// return the value of each index of the array.//
function toObject(keyValuePair) {
  var object = {};
  var value = keyValuePair.pop();
  var key = keyValuePair.pop();
  object[key] = value;
  return object;
}

// Define a function toObject with one parameter, keyValue Pair //
// set an empty object to a variable//
// Use pop method of the KeyValuePair object and assign that to a variable //
// Use the method again to access the remaining element //
// set the index of the empty object variable to the key and  the value to the rerspective variable//
// return the object //
