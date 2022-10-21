/* exported reverseWord */
function reverseWord(word) {
  var empty = '';
  for (var i = word.length - 1; i >= 0; i--) {
    empty += word[i];
  } return empty;
}
