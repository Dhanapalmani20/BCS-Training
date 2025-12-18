//Task 2.1
// Convert °C -> °F
// Enter temperature in °C - User
// 30°C
// Formula: (0°C × 9/5) + 32
// Output
// The temperature in 30°C is 86°F

var celsius = +prompt("Enter temperature in °C"); // string -> number
// console.log(typeof celsius, celsius, +celsius);

// "10" + 100 -> "10100"
// console.log(celsius + 100);

var fahrenheit = (celsius * 9) / 5 + 32;
console.log("The temperature in " + celsius + "°C is " + fahrenheit + "°F");

// Task 2.2 (same as above with Template literal)

// var celsius = +prompt("Enter temperature in °C");
// var fahrenheit = (celsius * 9) / 5 + 32;
// console.log("The temperature in " + celsius + "°C is " + fahrenheit + "°F");
console.log(`The temperature in ${celsius}°C is ${fahrenheit}°F`);