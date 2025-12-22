//console.log(moodReport());
//console.log(moodReport("😎", "afternoon ☀️"));
//Feeling 🙂 this morning 🌅.
//Feeling 😎 this afternoon ☀️
// function moodReport(emoji = "🙂", timeoftheDay = "morning 🌅") {
//   return console.log(`feeling ${emoji},this ${timeoftheDay}`);
// }
// console.log(moodReport());
// console.log(moodReport("😎", "afternoon ☀️"));

// function checkAgeCategory(age) {
//   if (age >= 18 && age <= 50) {
//     return "Adult";
//   } else if (age < 18) {
//     return "minor";
//   } else {
//     return "senior";
//   }
// }
// console.log(checkAgeCategory(35));
// console.log(checkAgeCategory(12));
// console.log(checkAgeCategory(65));

//TASK1.3

//Archmage Merlin wields a wand with Phoenix Feather core.

const wizard = {
  name: "Merlin",
  title: "Archmage",
  wand: { core: "Phoenix Feather" },
};
function introduceWizard(line) {
  const {
    name,
    title,
    wand: { core },
  } = wizard;
  return `${name} ${title} wand ${core} core`;
}
console.log(introduceWizard(wizard));
