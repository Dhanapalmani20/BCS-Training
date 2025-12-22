var stock1 = "vanilla";
var stock2 = "chocolate";
var stock3 = "butterscotch";
var stock4 = "cotton candy";

// Task 3.1 - TextCase - Dont consider
// Output
// Case 1
// Please enter your fav 🍧?: vanilla
// Yes, we have vanilla in stock

// Method 1
// var userFavIceCream = prompt("Please enter your fav 🍧?:");

// // D - Don't
// // R - Repeat
// // Y - Yourself
// if (userFavIceCream == stock1) {
//   console.log(`Yes, we have ${userFavIceCream} in stock`);
// } else if (userFavIceCream == stock2) {
//   console.log(`Yes, we have ${userFavIceCream} in stock`);
// } else if (userFavIceCream == stock3) {
//   console.log(`Yes, we have ${userFavIceCream} in stock`);
// } else if (userFavIceCream == stock4) {
//   console.log(`Yes, we have ${userFavIceCream} in stock`);
// } else {
//   console.log(`We ran out of ${userFavIceCream}`);
// }

// Method 2
// var userFavIceCream = prompt("Please enter your fav 🍧?:");

// // D - Don't
// // R - Repeat
// // Y - Yourself
// if (
//   userFavIceCream == stock1 ||
//   userFavIceCream == stock2 ||
//   userFavIceCream == stock3 ||
//   userFavIceCream == stock4
// ) {
//   console.log(`Yes, we have ${userFavIceCream} in stock`);
// } else {
//   console.log(`We ran out of ${userFavIceCream}`);
// }

// method 3
var userFavIceCream = prompt("Please enter your fav 🍧?:");
var allIceCreams = [stock1, stock2, stock3, stock4];
// D - Don't
// R - Repeat
// Y - Yourself
if (allIceCreams.includes(userFavIceCream)) {
  console.log(`Yes, we have ${userFavIceCream} in stock`);
} else {
  console.log(`We ran out of ${userFavIceCream}`);
}

// Clue: Logical Operator

// Case 2
// Please enter your fav 🍧?: strawberry
// We ran out of strawberry

// Task 3.2 -  - TextCase -  Consider it
// Output
// Case 1
// Please enter your fav 🍧?:   VAnilla
// Yes, we have vanilla in stock

// Case 2
// Please enter your fav 🍧?:     stRawberry
// We ran out of strawberry