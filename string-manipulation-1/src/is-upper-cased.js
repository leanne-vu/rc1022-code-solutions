/* exported isUpperCased */
function isUpperCased(word) {
  var upper = word.toUpperCase(word);
  if (word !== upper) { return false; } else return true;
}
