/* exported firstChars */
function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    newString += string[i];
    if (length > string.length) {
      return string;
    }
  } return newString;
}
