// 0, NaN, undefined, null
const x = [null];

// Condition -> true/false
// 100 - truthy - if the value converts to true its truthy
// null - falsy - if the value converts to false its falsy
if (x) {
  console.log("Awesome");
} else {
  console.log("Super");
}
