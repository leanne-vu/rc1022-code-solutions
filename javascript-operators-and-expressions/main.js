var width = 2;
var height = 3;

var area = width * height;

console.log('Area:', area);
console.log('typeof area:', typeof area);

var bill = 10;
var payment = 15;
var change = bill - payment;
console.log('change', change);
console.log('typeof change:', typeof change);

var quizzes = 99;
var midterm = 100;
var final = 95;

var grade = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log('typeof grade:', typeof grade);

var firstName = 'Leanne';
var lastName = 'Vu';
var fullName = firstName + ' ' + lastName;
console.log('Full name:', fullName);
console.log('typeof fullName', typeof fullName);

var ph = 4;
var isAcidic = ph < 7;
console.log('Acidic?', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

var headCount = 300;
var isSparta = headCount === 300;
console.log('Sparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

var motto = fullName;
motto = fullName + ' ' + 'is the GOAT';
console.log('motto:', motto);
console.log('typeof motto:', typeof motto);
