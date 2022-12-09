const takeAChance = require('./take-a-chance');

var hello = takeAChance('Leanne');

hello.then(message => {
  console.log(message);
}).catch(error => {
  console.error(error.message);
});
