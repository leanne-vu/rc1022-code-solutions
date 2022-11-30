const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const add = require('./add');

function calculate(string) {
  string = process.argv;
  for (var i = 0; i < string.length; i++) {
    if (i === 2) {
      var number1 = parseInt(string[i], 10);
    }
    if (i === 4) {
      var number2 = parseInt(string[i], 10);
    }
    if (i === 3) {
      var word = string[i];
    }
  }
  if (word === 'plus') {
    console.log(add(number1, number2));
  }
  if (word === 'minus') {
    console.log(subtract(number1, number2));
  }
  if (word === 'times') {
    console.log(multiply(number1, number2));
  }
  if (word === 'over') {
    console.log(divide(number1, number2));
  }
  if (word !== 'plus' && word !== 'minus' && word !== 'times' && word !== 'over') { console.log('invalid operation'); }
}
calculate();
