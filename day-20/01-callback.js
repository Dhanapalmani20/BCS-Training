const printHi = () => {
  console.log("HI");
};
setTimeout(printHi, 2000);

//tyep of callback
//1. Sync - NO time involvement - dbl
//2. Async - Time involvement - primtHi

//Async - Event completes - Action taken

const dbl = (num) => num * 2;
[1, 2, 3].map(dbl);
