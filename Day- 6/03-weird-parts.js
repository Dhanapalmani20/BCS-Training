console.log(typeof null); // object // bug

console.log(typeof NaN); // number

var t = NaN;
console.log(t == t); // false

// BODMAS
var result1 = 5 / 4 + 5 * 3 - 1;
var result = (5 / (5 + 5)) * (3 - 1);
console.log(result);

// Numeric separator
var salary = 12_00_000; // Improves readability