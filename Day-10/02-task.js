const fruits = ["🍎", "🍊", "🍌", "🍇", "🍓", "🥝"];

//
let index = 0;

while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}

// Better
for (let fruit of fruits) {
  console.log(fruit);
}
