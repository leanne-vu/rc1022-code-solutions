/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newArray = [];
  for (var i = 0; i < string.length; i++) { newArray.push(string[i]); }
  var letter = newArray[firstIndex];
  newArray[firstIndex] = newArray[secondIndex];
  newArray[secondIndex] = letter;
  var final = newArray.join('');
  return final;
}
