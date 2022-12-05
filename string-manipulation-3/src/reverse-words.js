/* exported reverseWords */
function reverseWords(string) {
  var individual = string.split(' ');
  var sentence = [];
  for (var i = 0; i < individual.length; i++) {
    sentence.push(individual[i].split('').reverse().join(''));
  }
  return sentence.join(' ');
}
