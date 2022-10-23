/* exported capitalizeWords */
function capitalizeWords(string) {
  string = string.split(' ');

  for (var i = 0; i < string.length; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].substr(1).toLowerCase();
  } return string.join(' ');

}
