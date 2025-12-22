var a = 50;
var b = 40;
var c = a + b; // logic

console.log(90);

var a1 = 90;
var b1 = 10;

var c1 = a1 + b1; // logic

console.log(c1);

// DRY

// 1. Reuse logic
// 2. Update in one place
// function sum(a, b) {
//   const total = Math.round(a + b);
//   return `The total is: ₹${total}`;
// }

// var c2 = sum(70.4, 30.2);
// var c3 = sum(200.5, 150.7);
// var c4 = sum(1_000.52, 10.7);

// console.log(c2);
// console.log(c3);
// console.log(c4);

// function sum(a, b) {
//   // Calculation starts
//   const total = Math.round(a + b);
//   // Calculation ends
//   return `The total is: ₹${total}`;
// }

// var c2 = sum(70.4, 30.2);

// console.log("c2:", c2);

// function sum(a, b) {
//   // Calculation starts
//   const total = Math.round(a + b);
//   // Calculation ends
//   return `The total is: ₹${total}`;
// }

// // no return - cundefined (c2)
// var c2 = sum(70.4, 30.2);
// var c3 = sum(200.5, 150.7);

// console.log("c2:", c2);

// // Parameters - 2
// function vikas(hand1, hand2) {
//   return `Tie: ${hand1}+${hand2} 🪢🔥🔥`;
// }

// Case 1: Args > params - extra Args skip
// const work1 = vikas("🍊", "🍎", "🎊"); // arg - 3
// const work2 = vikas("🍌", "🍎");
// const work3 = vikas("👕", "🍇");
// const work4 = vikas("☔", "🍎");

// console.log(work1);

// console.log(work2);
// console.log(work3);
// console.log(work4);

// // params: hand3 - undefined
// function vikas(hand1, hand2, hand3) {
//   return `Tie: ${hand1}+${hand2}+ ${hand3} 🪢🔥🔥`;
// }
// // Case 2: args < params
// const work2 = vikas("🍌", "🍎");
// console.log(work2);

// params: hand3 - undefined | since undefined default value is taken
function vikas(hand1, hand2, hand3 = "🍓") {
  return `Tie: ${hand1}+${hand2}+${hand3} 🪢🔥🔥`;
}
// Case 2.5: args < params : We want default value 🍓
const work1 = vikas("🍊", "🍎", "🎊");
console.log(work1);

const work2 = vikas("🍌", "🍎");
console.log(work2);

// Max n number params
console.log(Math.max(8, 4));
console.log(Math.max(8, 10, 6, 100, 4));

// Support n number params - ... rest
function sum(a, b, ...arr) {
  console.log(arr);
  return a + b;
}

console.log(sum(3, 4)); // 7
console.log(sum(3, 4, 10, 10)); // 7, [10, 10]
console.log(sum(3, 4, 10, 10, 5, 5)); // 7 [10, 10, 5, 5]

const arr = [8, 10, 6, 100];

// console.log(Math.max(8, 10, 6, 100, 4));

// console.log(Math.max(arr)); // NaN

console.log(Math.max(arr[0], arr[1], arr[2], arr[3]));
console.log(Math.max(...arr)); // spread

function sumRound(a, b) {
  const total = Math.round(a + b);
  return total;
}

const result = sumRound(4.5, 10.7);
const discount = result * 0.1;
console.log(result, discount);
