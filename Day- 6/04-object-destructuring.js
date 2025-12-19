const student = {
  name: "Abishek",
  age: 20,
  address: {
    city: "Trichy",
    state: "TN",
  },
  hobbies: ["cricket", "football", "carrom"],
};

// Task 1.1 - Destructuring
// 1. name
// 2. city
// 3. second hobby - "football"
// const {name,address}=student;
// const{hobbies}=student;
// const[,h2]=hobbies;
// const {city}=address;
// console.log(name);
// console.log(city);
// console.log(h2 );
const {
  name,
  address: { city },
  hobbies: [, h2],
} = student;
//const{city,}=(hobbies,address);
console.log(name);
console.log(city);
console.log(h2);
