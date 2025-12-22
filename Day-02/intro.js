console.log("Hello, 🌏");

// +, - , *.... -> operators
// 5, 3 -> operands
// Operator operates on operands

// Types of operators
// 1. Arithmetic Operators
console.log(5 + 3); // 8
console.log(5 - 3); // 2
console.log(5 * 3); // 15
console.log(5 / 3); // 1.6666...

console.log(5 ** 3); // 125
console.log(5 % 3); // % -> modulus (Remainder)

// 2. Assignment
var x = 10; // = Assignment operator

// 3. Comparison operators - Always returns boolean

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(10 == 10); // true
console.log(10 > 10); // false
console.log(10 >= 10); // true
console.log(10 < 10); // false
console.log(10 <= 10); // true
console.log(10 >= 8); // true

var t1 = 8;
var t2 = 10;

console.log(t1 == t2); // false

var t1 = 18;
var t2 = 10;

console.log(t1 != t2); // true

// 4. Logical operators
// var a = true;
// var b = false;

// console.log(a && b); // false

// var a = true;
// var b = true;

// console.log(a && b); // true

var a = false;
var b = true;

console.log(a || b); // true

console.log(4 > 3 || 10 <= 10);
console.log(10 > 9 && 10 < 10);
console.log(!(7 >= 9) || !(5 > 3));
console.log(7 != 8 && 4 >= 3 && 3 != 9 && !(4 > 1));