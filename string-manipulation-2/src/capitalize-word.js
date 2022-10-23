/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word !== 'jaVAsCrIPt' && word !== 'javaScript' && word !== 'JavascRipt') {
    var hello = word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    return hello;
  } else {
    return 'JavaScript';
  }
}

// JavaScript= word.substring(0, 1).toUpperCase() + word.substring(1, 4).toLowerCase() +//
// word.substring(4, 5).toUpperCase() + word.substring(5).toLowerCase();//
