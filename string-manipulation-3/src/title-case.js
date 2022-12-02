/* exported titleCase */
// Define a function titleCase with one parameter,  title//
// Use the split method to split up the title into individual words//
// if the word is at index 0, capitalize the first letter.//
// if the word at each length is greater than 4, capitalize the first letter//
// if the word is smaller than 4, lowercase all
// return and join method//

function titleCase(title) {
  var words = title.split(' ');
  var small = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var i = 0; i < words.length; i++) {
    var replace = '';
    var lowerword = words[i].toLowerCase();
    var previousWord = words[i - 1];
    if (small.includes(lowerword) && i !== 0 && previousWord[previousWord.length - 1] !== ':') {
      replace = lowerword;
    } else if (!small.includes(lowerword) || words[i] === words[0] || previousWord[previousWord.length - 1] === ':') {
      replace += words[i][0].toUpperCase();
      replace += words[i].substring(1).toLowerCase();
    }
    if (replace.toLowerCase() === 'javascript') {
      replace = 'JavaScript';
    }
    if (replace.toLowerCase() === 'javascript:') {
      replace = 'JavaScript:';
    }
    if (replace.toLowerCase() === 'api') {
      replace = 'API';
    }
    if (replace.includes('-')) {
      replace = replace.split('-');
      replace[1] = replace[1][0].toUpperCase() + replace[1].substring(1);
      replace = replace[0] + '-' + replace[1];
    }
    words[i] = replace;
  } return words.join(' ');
}

// Define function titleCase with one parameter, title //
// Use the split method on the string to make an array of the words//
// Put all the words that have to be lower case into an array //
// Use a for loop to iterate through the words //
// Assign an empty string to a variable, this is what will replace the words in the title //
// Assign the word at each index lower cased to a variable (to avoid any discrepencies in capitalization)//
// Assign the index before each index as a variable //
// Use an if statement, if the lowercased word is part of the array of words that have to be lower cased ,
// and the word before it does not include a colon , use the lowercased word and replace it at that index//
// Use an else if statement , if the word is not part of the array , or not the first word, or the word before it has a colon,
// uppercase the first letter of the word and assign it to the index //
// Check for javascript, javascript: , and api and hardcode the capitalization for those//
// check if the word has a - . if it does, split the word and capitalize both first letters of the word//
// concatinate the two and assign it to the index//
// return the word joined together after the loop
