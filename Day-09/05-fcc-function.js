// function sayhello() {
//   return function () {
//     console.log("Hello! ");
//   };
// }
// sayhello()();
//console.log(sayhello(), "Hello! ");
//const result = sayhello();
//console.log(result, typeof result);
//result();

function fun() {
  let x = 10;
  function cool() {
    let y = 5;
    let x = 1;
    console.log(y);
    console.log("cool", x);
  }
  cool();
}
fun();
