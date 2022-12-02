/* exported titleCase */
// Define a function titleCase with one parameter,  title//
// Use the split method to split up the title into individual words//
// if the word is at index 0, capitalize the first letter.//
// if the word at each length is greater than 4, capitalize the first letter//
// if the word is smaller than 4, lowercase all
// return and join method//

// function titleCase(title) {
//   var words = title.split(' ');

//   for (var i = 0; i < words.length; i++) {
//     words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();

//     if (words[i].length >= 3 && words[i] !== 'THE') { words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(); }
//     if (words[i].length < 3 && words[i] !== 'AN') { words[i] = words[i].toLowerCase(); }
//     if (words[i] === 'Javascript' || words[i] === 'javascript') { words[i] = 'JavaScript'; }
//     if (words[i] === 'Javascript:' || words[i] === 'javascript:') { words[i] = 'JavaScript:'; }
//     if (words[i] === 'Api') { words[i] = words[i].toUpperCase(); }
//     if (words[i] === 'And' || words[i] === 'or' || words[i] === 'nor' || words[i] === 'but' || words[i] === 'a' || words[i] === 'tHe' || words[i] === 'ThE' || words[i] === 'the' || words[i] === 'For') { words[i] = words[i].toLowerCase(); }
//     if (words[i] === 'i') { words[i] = words[i].toUpperCase(); }
//     if (words[i].includes('-')) {
//       words[i] = words[i].toLowerCase().replace(/(?:^|[\s-/])\w/g, function (match) {
//         return match.toUpperCase();
//       });
//     }
//     if (words[i].includes(':')) {

//       words[i + 1] = words[i + 1].charAt(0).toUpperCase() + words[i + 1].slice(1).toLowerCase();
//       console.log(words[i + 1]);
//     }

//   }
//   return words.join(' ');
// }
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
