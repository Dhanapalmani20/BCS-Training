const x1 = 5;
const x2 = 5;

console.log(x1 == x2);

// const t1 = [100, 200]; // B1
// const t2 = t1; // B1
// const t3 = [100, 200]; // B2

// // ==, === Check for Base address
// console.log(t1 == t2); // true
// console.log(t1 == t3); // false

const t1 = [100, 200]; // B1
const t2 = t1; // B1
const t3 = [100, 200]; // B2

t1.push(300);
t2.push(400);
t3.push(500);

console.log(t1);
console.log(t2);
console.log(t3);

const z1 = {};
const z2 = {};

console.log(z1 == z2);

const r1 = [100, 200];
const r2 = r1; // 1. Copy by reference - Share same Address

// Spread (...) operator
const r3 = [...r1]; // 2. Copy by value

console.log(r1);
console.log(r2);
console.log(r3);

console.log(r1 == r2);
console.log(r1 == r3);