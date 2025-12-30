// const values = [1, 3,];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues); //[1, 2, 10, 21]
// console.log(values); // [1, 2, 10, 2]

// const arr = [1, 7, 3, 10, 5];
// const result = arr.reduce((acc, curt) => {
//   if (curt % 2 == 0) {
//     return acc + curt;
//   }
//   return acc;
// }, 0);
// console.log(result);

const arr = [1, 7, 3, 10, 5];
const result = arr.reduce((acc, curt) => (curt < acc ? acc : curt));
console.log(result);
// [1, 3, 100, 4] - -ve => no change
// [1, 3, 100, 4] - -ve => no change
// [1, 3, 4, 100] - +ve => Change

// const arr = [1, 3, 100, 4];
// console.log(
//   arr
//     .toSorted((a, b) => a - b) // [1, 3, 4 , 100]
//     .join(" | ")
// );

// console.log(arr); // [1, 3, 100, 4]

//const arr = [1, 3, 100, 4];
console.log(
  arr
    .toSorted((a, b) => b - a) // [100, 4, 3, 1]
    .toSpliced(2, 3, 4) // [100, 4, 4]
    .toReversed() // [4, 4, 100]
    .slice(3, 5) // []
    .join(" | ") // ""
);

console.log(arr); // [1, 3, 100, 4]

// Reduce
// Array of any -> Any

const marks = [90, 50, 30, 100, 6];

console.log(
  // 90, 50 => 50 > 90 ? 50 : 90
  marks.reduce((max, curr) => (curr > max ? curr : max))
);

console.log(
  // 90, 50 => 50 > 90 ? 50 : 90
  marks.reduce((max, curr) => Math.max(max, curr))
);
