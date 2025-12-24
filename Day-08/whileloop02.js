//printPattern();
// Output
// ❤️
// ❤️❤️
// ❤️❤️❤️
// ❤️❤️❤️❤️
// ❤️❤️❤️❤️❤️
function printPattern() {
  let heart = 1;
  while (heart <= noofRows) {
    console.log(heart.repeat(heart));
    heart++;
  }
}
