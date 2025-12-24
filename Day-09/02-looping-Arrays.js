const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

// for (let i = 0; i < avengers.length; i++) {
//   console.log(`${avengers[i]} is ${avengers[i].length} letters`);
// }

for (let avenger of avengers) {
  console.log(`${avenger} is ${avenger.length} letters`);
}
