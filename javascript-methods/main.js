var four = 4;
var five = 5;
var six = 6;
var maximumValue = Math.max(four, five, six);
console.log('maximumValue:', maximumValue);

var heroes = ['Superman', 'Batman', 'Catwoman', 'Captain America'];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Knight at Dawn',
    author: 'Mary Pope Osborne'
  },
  {
    title: 'Pirates Past Noon',
    author: 'Mary Pope Osborne'

  },
  {
    title: 'Dinosaurs Before Dark',
    author: 'Mary Pope Osborne'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Leanne Vu';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
