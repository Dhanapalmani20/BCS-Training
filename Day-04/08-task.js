// Reference Data types / Non-primitive
// 1. Array
// 2. Object

var fruit1 = "apple 🍎";
var fruit2 = "🍊";
var fruit3 = "🍌";
var fruit4 = "🍇";

console.log(fruit1, fruit3);

// Array - Store multiple values of same data type
// item - element
var fruits = ["🍎", "🍊", "🍌", "🍎", "🍇"]; // Array of strings
console.log(fruits);

var marks = [80, 40, 90, 40, 35]; // Array of string
console.log(marks);

var mix = ["a", 1, "bat", "c"]; // Not recommend ❌
console.log(mix);

console.log(fruits.length); // 5

console.log(fruits[2]); // "🍌"
console.log(fruits[4]); // "🍇"
console.log(fruits[5]); // undefined

// Arrays are mutable
var avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
]; // array of string

console.log(avengers[3]); // Captain america

// Access
avengers[0] = "She Hulk";
console.log(avengers);

// Object (Keys: value)
var petProfile = {
  name: "fluffy",
  age: 3,
  color: "white",
  legs: 4,
  isFriendly: true,
  favoriteToy: "ball",
  "graduated at": "Dog academy",
  "movie-title": "Harry potter",
};

console.log(petProfile);

// Access values
// 1. Dot notation (Recommended)
console.log(petProfile.name);
console.log(petProfile.favoriteToy);
// console.log(petProfile.graduated at); // Error ❌
// console.log(petProfile.movie-title); /// Error ❌

// 2. Bracket/Box notation
console.log(petProfile["name"]);
console.log(petProfile["favoriteToy"]);
console.log(petProfile["graduated at"]); // ✅
console.log(petProfile["movie-title"]); // ✅

console.log(petProfile);

// Task - Increment the age by 1
// petProfile.age = 4;

// Mutable
var petProfile = {
  name: "fluffy",
  age: 3,
  color: "white",
  legs: 4,
  isFriendly: true,
  favoriteToy: "ball",
  "graduated at": "Dog academy",
  "movie-title": "Harry potter",
};

// Your Code

// Access
console.log(petProfile.age);

// Method 1
// // Current value + 1
// petProfile.age = petProfile.age + 1;
// petProfile.age = petProfile.age + 1;

// Method 2  (✅)
// petProfile.age += 1;

// Method 3
// petProfile.age++;

console.log(petProfile);