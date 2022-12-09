const takeAChance = require('./take-a-chance');

var hello = takeAChance('Leanne');

hello.then(message => {
  console.log(message);
}).catch(message => {
  console.log(message);
});
