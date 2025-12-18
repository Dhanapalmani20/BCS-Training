const [t1, , t2, t3 = 80] = [100, 200, null];

console.log(t1, t2, t3);

// Rest ... operator - Collect rest of the values
const fruits = ["🍎", "🍊", "🍌", "🍇", "🍓"];
const [f1, f2, ...extras] = fruits;

// Left (Rest) = Right (Spread)
console.log(f1, f2);
console.log(f1, f2, typeof f1, typeof f2);

console.log(extras);