// {} -> Block

// {
//   var x = 10;
//   let y = 20;
// }

// console.log(x); // 10 // x escaping the jail
// console.log(y); // ReferenceError: y is not defined

function fun() {
  var x = 10;
  let y = 20;
}

fun();

console.log(x); // ReferenceError: x is not defined

console.log(y); // ReferenceError: y is not defined

// Types of Scope
// 1. let & const -> Block scope
// 2. var -> Function scope
