var num = 10;
var num = 80; // Latest one wins 🏅

console.log(num);

let salary = 50000;
// let salary = 20000;

console.log(salary);

// Identifier 'height' has already been declare
// const height = 170;
const height = 150;

console.log(height);

let noOfFruits = 10;
noOfFruits = 5; // Reassignment ✅

console.log(noOfFruits);

const aadharNo = 1389083233223;
// aadharNo = 982938823983; // TypeError: Assignment to constant variable.

console.log(aadharNo);

// BaseAddress: 156
const marks = [90, 60, 40];
marks[1] = 80;

// BaseAddress: 867
marks = [80, 90, 400]; // Assignment to constant variable.

console.log(marks);

// let - allows changing Base address
// const - Doesn't allow changing Base address