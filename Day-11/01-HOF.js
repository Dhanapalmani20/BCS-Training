// Anonymous + Arrow (multi) function
const result2 = [3, 4, 5, 10].some((num) => {
  return num > 6;
}); // true

// Anonymous + function expression
const result3 = [3, 4, 5, 10].some(function (num) {
  return num > 6;
});

// function expression
const result4 = [3, 4, 5, 10].some(function isGtSix(num) {
  return num > 6;
});

// function declaration
function isGtSix(num) {
  return num > 6; // Boolean
}

// console.log(isGtSix, typeof isGtSix);
// console.log(isGtSix(10), typeof isGtSix(10));

// Reuse
// const isGtSix = (num) => num > 6; // Self-Documentation

// Functions which returns boolean called as predicate
const result5 = [3, 4, 5, 10].some(isGtSix);
// Anonymous (one-time use) + Arrow function
const result1 = [3, 4, 5, 10].some((num) => num > 6); // true

console.log(result1);
console.log(result2);

const result6 = [7, 4, 5, 10].every((num) => num > 6);
console.log(result6); // false

// dbl returns number - not predicate
function dbl(n) {
  return n * 2;
}

console.log(typeof dbl);
console.log(typeof dbl(10)); // number

// good -  predicate
function good() {
  return true;
}

function good1() {
  return 5 > 4 && 6 < 7;
}

// Case 1:
movies
  .filter((movie) => movie.ratings < 8) // []
  .map((movie) => movie.title); // []
//   .map() // []
//   .map()
//   .map();
//...

// Case 2:
movies.filter((movie) => movie.ratings < 8).map((movie) => movie.title);
//   .filter()
//   .map()
//   .filter()
//   .map();
//...
