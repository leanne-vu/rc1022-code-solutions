var student = {
  firstName: 'Leanne',
  lastName: 'Vu',
  age: 24
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Optometric assistant';

console.log('Lives in Irvine?', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);
console.log('Value of student object:', student);

var vehicle = {
  make: 'BMW',
  model: '330i',
  year: 2021
};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('Vehicle color:', vehicle['color']);
console.log('Is it a convertible?', vehicle['isConvertible']);

console.log('Value of vehicle object:', vehicle);

var pet = {
  name: 'Twinkie',
  type: 'Maltese'
};
delete pet.name;
delete pet.type;

console.log('Value of pet', pet);
