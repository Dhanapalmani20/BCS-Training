var price = 400;
//Lexical scope - local guy (prefer)

function getPrice() {
  console.log("the old price:", price);
  var price = 500; // Shadowing
  console.log("the new price:", price);
}
getPrice();
