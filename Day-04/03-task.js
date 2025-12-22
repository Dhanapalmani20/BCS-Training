// ## 🎮 Assignment 1.1 : Day Decoder

// Ask the user for a number **1–7** and print the matching weekday. Otherwise print **"Wrong Option"**.

// ### Sample Output

// **Input:** `3` → `Wednesday`
// **Input:** `8` → `Wrong Option`

// 10
var numberOfTheDay = +prompt("Tell me the day number:");

// 10==1 -> False -> If skip
if (numberOfTheDay == 1) {
  console.log("Monday");
} else if (numberOfTheDay == 2) {
  console.log("Tuesday");
} else if (numberOfTheDay == 3) {
  console.log("Wednesday");
} else if (numberOfTheDay == 4) {
  console.log("Thursday");
} else if (numberOfTheDay == 5) {
  console.log("Friday");
} else if (numberOfTheDay == 6) {
  console.log("Saturday");
} else if (numberOfTheDay == 7) {
  console.log("Sunday");
} else {
  console.log("Wrong Option");
}