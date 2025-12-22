const avenger = {
  name: "Tony Stark",
  house: "🏘️",
  networth: "💰💰💰",
  power: "🤖",
  phrase: "❤️ you 3000",
};

const { power, house } = avenger;

console.log(power, house);

// const student = {
//   name: "Abishek",
//   age: 20,
//   address: {
//     city: "Trichy",
//     state: "TN",
//   },
//   hobbies: ["cricket", "football", "carrom"],
// };

// Task 1.1 - Destructuring
// 1. name
// 2. city
// 3. second hobby - "football"

// const [h1, h2, h3] = hobbies;
// const {address} = student;

// Method 1
// const { name, address, hobbies } = student;
// const { city } = address;
// const [, h2] = hobbies;

// Method 2
// const {
//   name,
//   address: { city, state },
//   hobbies: [, h2],
// } = student;
// // const [, h2] = hobbies;

// console.log(name); // "Abishek"
// // console.log(address); // Erorr ❌
// console.log(city, state);
// // console.log(hobbies); // Erorr ❌
// console.log(h2);
// // console.log(hobby);

// Summary

const student = {
  name: "Abishek",
  age: 20,
  address: {
    state: "TN",
  },
  hobbies: ["cricket", "football", "carrom"],
  skills: ["Dance", "Violin"],
};

const {
  skills: [, s1],
} = student;

console.log(s1);

// Default value taken when the value is undefined
// Task - provide default value for city as 'N/A'
// const { name = "Surya", skills = ["HTML", "CSS", "Singer"] } = student;

const student1 = {
  name: "Abishek", // L1
  age: 20,
  address: {
    // L1
    city: "Trichy", // L2
    state: "TN",
  },
};

const student2 = {
  name: "Abishek",
  age: 20,
  address: {
    state: "TN",
  },
};

const {
  name: fullName, // rename
  address: { city = "N/A" },
} = student2;

console.log(fullName);
// Case 1: City is Trichy
console.log(city); // Trichy

// Case 2: City is not present
console.log(city); // 'N/A'
// Method 2

const petProfile = {
  name: "fluffy",
  age: 3,
  color: "white",
  legs: 4,
};

const { age, legs, ...details } = petProfile;

console.log(details);

var petProfile1 = {
  name: "fluffy",
  age: 3,
  color: "white",
  legs: 4,
  isFriendly: true,
  favoriteToy: "ball",
  "graduated at": "Dog academy",
  "movie-title": "Harry potter",
};

// const { age, legs, ...details } = petProfile;
