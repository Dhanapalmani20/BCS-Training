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
