/* exported getKeys */
// Define a function getKeys with one parameter, object//
// Assign an empty array to a variable //
// use a for.. in loop to access the keys of the object//
// return the keys//

function getKeys(object) {
  var array = [];
  for (const key in object) { array.push(key); } return array;

}

// Define a function get keys with one parameter, object//
// assign an empty array to a variable //
// use a for in loop to access the key in each object //
// Use the push method of the array to insert each key into the empty array//
// return the arrray//
