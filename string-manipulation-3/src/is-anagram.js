/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var first = firstString.replaceAll(' ', '').split('').sort().join();
  var second = secondString.replaceAll(' ', '').split('').sort().join();
  if (first === second) { return true; } else return false;
}
