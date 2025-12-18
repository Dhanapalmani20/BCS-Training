// Task 3.1 - Use template literal
// Find area of circle given radius
// PI = 3.14
// Enter the radius in cm: 2
// Output
// The Area for the given 2cm radius is 12.56cm²

// Method 1
// var PI = 3.14; // Good practice
// var radius = prompt("Enter the radius in cm:");
// var area = PI * radius * radius;
// console.log(`The Area for the given ${radius}cm radius is ${area}cm²`);

// // // Method 2
// var PI = 3.14; // Good practice
// var radius = prompt("Enter the radius in cm:");
// var area = PI * radius ** 2; // Exponential Operator
// console.log(`The Area for the given ${radius}cm radius is ${area}cm²`);

// Method 3
var PI = 3.14; // Good practice
var radius = prompt("Enter the radius in cm:");
console.log(
  `The Area for the given ${radius}cm radius is ${PI * radius ** 2}cm²`
);