/* exported ransomCase */
// Define a function ransomCase with one parameter, string //
// use a for loop to go through the string at each index, skipping every other index //
// use the toUpperCase method of the object for each loop//
// return word after the loop//
function ransomCase(string) {
  var hello = string.toLowerCase();
  var newArray = hello.split('');
  for (var i = 1; i < newArray.length; i += 2) {
    newArray[i] = newArray[i].toUpperCase();
    var final = newArray.join('');
  } return final;
}
