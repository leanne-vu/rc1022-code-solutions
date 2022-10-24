/* exported pick */
// Define function pick with two parameters, source and keys //
// Assign an empty object to a variable //
// using a for in loop, get the keys from each object //
// assign to empty object and return//
// use an if statemen so if the keys do not match the source, an empty object is returned//

function pick(source, keys) {
  var final = {};
  for (const key in source) {
    if (keys.includes(key) && typeof source[key] !== 'undefined') final[key] = source[key];
  } return final;
}
