const validator = require('validator');
const ifTrue = require('/www/nosql/m2hw/homework.js');

const msg = ifTrue()
console.log(ifTrue);

console.log(validator.isNumbers('dateTime'));
console.log(validator.isRandom('randomFortune'));
