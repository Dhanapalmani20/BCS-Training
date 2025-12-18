var petProfile = {
  name: "fluffy",
  age: 3,
  color: "white",
  legs: 4,
  owner: {
    name: "Tarachand",
    phone: "9830303923",
  },
};

// console.log("petProfile 🎊", petProfile);
// console.log("petProfile.owner", petProfile.owner);
// console.log("petProfile.owner.phone", petProfile.owner.phone);

// // Bracket notation
// console.log(petProfile["owner"]["phone"]);

// // mix Dot & Bracket notation
// console.log(petProfile.owner["phone"]);

petProfile.owner.phone = "83343433333";
console.log("petProfile.owner.phone", petProfile.owner.phone);
console.log("petProfile 🎊", petProfile);

// Most common ✅
// Array of objects

// Traversing
const pets = [
  { name: "fluffy", age: 3 }, // 0
  { name: "barbarian", age: 5 }, // 1
  { name: "buddy", age: 1 }, // 2
];

console.log(pets.length);
console.log(pets[1]);

console.log(pets[1].name);
console.log(pets[2].age);

var student = {
  name: "Surya",
  place: "Vellore",
};

console.log(typeof student);
console.log(typeof student.place);

var marks = [90, 80, 20, 100];

console.log(typeof marks);
console.log(marks[0]);

// Object Keys & Value
// Arrays Index & Value

// Array can be Object (Not vice-versa)
var marks1 = {
  0: 90,
  1: 80,
  2: 20,
  3: 100,
};

console.log(marks1[0]);