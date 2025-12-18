//Assignment 1.2: Height Showdown

// Get **two names** and their **heights (cm)** using `prompt()`.
// Print who is taller (and by how many cm). If equal, print they’re the same height.

// ### Sample Output

// **Scenario 1**

// * person1: `Muthu`, height: `186`
// * person2: `Abishek`, height: `165`
// * Output: `Muthu is taller than Abishek by 21cm`

// **Scenario 2**

// * person1: `Asha`, height: `170`
// * person2: `Vijay`, height: `170`
// * Output: `Asha and Vijay are of same height`

// Method 1
// var person1Name = prompt("Please tell me your name:");
// var person1Height = +prompt(`${person1Name} tell me your height:`);
// var person2Name = prompt("Please tell me your name:");
// var person2Height = +prompt(`${person2Name} tell me your height:`);

// // 180 > 180
// if (person1Height > person2Height) {
//   console.log(
//     `${person1Name} is taller than ${person2Name} by ${
//       person1Height - person2Height
//     }cm`
//   );
// } else if (person1Height == person2Height) {
//   console.log(`${person1Name} and ${person2Name} are of same height`);
// } else {
//   console.log(
//     `${person2Name} is taller than ${person1Name} by ${
//       person2Height - person1Height
//     }cm`
//   );
// }

// // Method 2
// var person1Name = prompt("Please tell me your name:");
// var person1Height = +prompt(`${person1Name} tell me your height:`);
// var person2Name = prompt("Please tell me your name:");
// var person2Height = +prompt(`${person2Name} tell me your height:`);
// var difference1 = person1Height - person2Height;
// var difference2 = person2Height - person1Height;

// // 180 > 180
// if (person1Height > person2Height) {
//   console.log(
//     `${person1Name} is taller than ${person2Name} by ${difference1}cm`
//   );
// } else if (person1Height == person2Height) {
//   console.log(`${person1Name} and ${person2Name} are of same height`);
// } else {
//   console.log(
//     `${person2Name} is taller than ${person1Name} by ${difference2}cm`
//   );
// }

// Method 3
var person1Name = prompt("Please tell me your name:");
var person1Height = +prompt(`${person1Name} tell me your height:`);
var person2Name = prompt("Please tell me your name:");
var person2Height = +prompt(`${person2Name} tell me your height:`);
var difference = Math.abs(person1Height - person2Height);

// 180 > 180
if (person1Height > person2Height) {
  console.log(
    `${person1Name} is taller than ${person2Name} by ${difference}cm`
  );
} else if (person1Height == person2Height) {
  console.log(`${person1Name} and ${person2Name} are of same height`);
} else {
  console.log(
    `${person2Name} is taller than ${person1Name} by ${difference}cm`
  );
}