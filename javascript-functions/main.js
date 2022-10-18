function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinToSecResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds result:', convertMinToSecResult);

function greet(name) {
  var greeting = 'Hello, ' + name;
  return greeting;
}
var greetResult = greet('Brett');
console.log('greet result:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var getAreaResult = getArea(17, 42);
console.log('getArea Result', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Leanne', lastName: 'Vu' });
console.log('getFirstName result:', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'acessories']);
console.log('getLastElement result:', getLastElementResult);
