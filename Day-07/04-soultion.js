// Feeling 🙂 this morning 🌅.
function moodReport(emoji = "🙂", timeOfDay = "morning 🌅") {
  return `Feeling ${emoji} this ${timeOfDay}.`;
}

// Args > Params
console.log(moodReport()); // calling the function
console.log(moodReport("😎", "afternoon ☀️"));

function checkAgeCategory(age = 18) {
  // Condition
}

console.log(checkAgeCategory());
console.log(checkAgeCategory(12));
console.log(checkAgeCategory(65));

// >= 60 -> Senior
// >=- 18 -> Adult
