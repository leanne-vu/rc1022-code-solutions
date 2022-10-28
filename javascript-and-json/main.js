var books = [
  {
    isbn: '123456789',
    title: 'hello, world',
    author: 'Leanne Vu'
  },
  {
    isbn: '987654321',
    title: 'hello, ocean',
    author: 'Bob Jim'
  },
  {
    isbn: '0101010101',
    title: 'hello, sky',
    author: 'Sally Mae'
  }
];
console.log('array', books);
console.log('type of array:', typeof books);
var jsonBooks = JSON.stringify(books);
console.log('json', jsonBooks);
console.log('type of json:', typeof jsonBooks);

var jsonString = '{"numberID":12345,"name":"Leanne Vu"}';
console.log('jsonString', jsonString);
console.log('type of jsonstring:', typeof jsonString);
var javaObject = JSON.parse(jsonString);
console.log('javaObject', javaObject);
console.log('type of javaobject:', typeof javaObject);
