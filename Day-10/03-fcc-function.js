//const add = (a) => (b) => a + b;

//console.log(a + b()());
// function add(a, b) {
//   return add(b);
//   {
//     return a + b;
//   }
// }
// const add = a(5);
// console.log();
// const add = (a) => (b) => a + b;

function dbl(x) {
  return x * 2;
}

const add1 = (a) => {
  return (b) => a + b;
};

const add2 = (a) => {
  return (b) => {
    return a + b;
  };
};

const add3 = function (a) {
  return function (b) {
    return a + b;
  };
};

// const result1 =  function (b) {
//     return 4 + b;
//   };

const result = add3(4);
console.log(result(5));

console.log(add3(4)(5));

// const dbl = (x) => x * 2;

// x - parameter
function dbl(x) {
  return x * 2;
}

// // const r1 = 8 * 4

// 4 - argument
// const r1 = dbl(4) * 4; // 32

// console.log(dbl(4));

dbl(4);
