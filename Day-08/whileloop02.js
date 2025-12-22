printPattern();
// Output
// ❤️
// ❤️❤️
// ❤️❤️❤️
// ❤️❤️❤️❤️
// ❤️❤️❤️❤️❤️
function printPattern() {
  let heart = 1;
  while (heart <= 5) {
    console.log(` ❤️ `.repeat(heart));
    heart++;
  }
}
