const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

var evenNumbers = numbers.filter(evens => { return evens % 2 === 0; });
var overFive = numbers.filter(bigs => { return bigs > 5; });
var startWithE = names.filter(e => { return e[0] === 'E'; });
var haveD = names.filter(d => { return d.includes('d') || d.includes('D'); });
