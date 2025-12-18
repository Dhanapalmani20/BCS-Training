// // Get value from user
var fullName = prompt("Tell me your name?");

// console.log(fullName);
// console.log(fullName + ", Welcome to BCS!");

// console.log("👋🙍‍♂️" + fullName + ", Welcome to BCS!");

// 1. Better readability
console.log(`👋🙍‍♂️${fullName}, Welcome to BCS!`);

// var quotes = `Dream is not that you see in sleep,
// dream is something
// that does not let you sleep.`;
// console.log(quotes);

// 2. Multi line support - ✅
var quotes = `Dreams are not that you see in sleep,
dream is something
that does not let you sleep.`;

// \n - new line character
var quotes1 =
  "Dreams are not that you see in sleep,\ndream is something\nthat does not let you sleep.";

console.log(quotes);

console.log(quotes1);

//    No multi line (❌)
// var quotes = 'Dream is not that you see in sleep,
//    dream is something
//    that does not let you sleep.';

// 3. Allows expressions
var msg = `Rahul has ${2 * 1000} followers🎊`;
console.log(msg);

// if you can assign to a variable its called a expression
var followerCount = 2 * 1000; // Expressions

// if statement
// var cool = if(x > 2){

// }