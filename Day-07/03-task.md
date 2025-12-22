Task 1.1
Create a function moodReport with two parameters that have default values.
Return a sentence using those values.

🛠️ Setup Code
console.log(moodReport());
console.log(moodReport("😎", "afternoon ☀️"));
✅ Output
Feeling 🙂 this morning 🌅.
Feeling 😎 this afternoon ☀️.
Task 1.2 – 🧒 or 👨?
Create a function checkAgeCategory(age = 18)

🛠️ Setup Code
console.log(checkAgeCategory());
console.log(checkAgeCategory(12));
console.log(checkAgeCategory(65));
✅ Output
👨 Adult
🧒 Minor
🧓 Senior
Task 1.3 – 🪄 Wizard Intro
Create a function introduceWizard(wizardObj)

🛠️ Setup Code
const wizard = { name: "Merlin", title: "Archmage", wand: { core: "Phoenix Feather" } };
console.log(introduceWizard(wizard));
✅ Output
🪄 Archmage Merlin wields a wand with Phoenix Feather core.
Task 1.4 – 📦 Combine & Add
Create a function mergeInventory(existing, incoming)

🛠️ Setup Code
const shelf = ["🍎", "🥪"];
const delivery = ["🍫", "🍇"];
console.log(mergeInventory(shelf, delivery));
✅ Output
["🍎", "🥪", "🍫", "🍇", "🧃"]
Task 1.5 – 🎒 Bag Check
Create a function packBag(owner = "Anon", ...items)

🛠️ Setup Code
console.log(packBag("Natasha", "💄", "🔫"));
console.log(packBag());
✅ Output
🎒 Natasha's bag contains: 💄, 🔫
🎒 Anon's bag is empty.
Task 1.6 – 📍Where Are You?
Create a function whereAreYou(personObj)

🛠️ Setup Code
console.log(whereAreYou({ user: "Thor", location: { city: "Asgard", planet: "Yggdrasil" } }));
console.log(whereAreYou({}));
✅ Output
Thor is currently in Asgard, Yggdrasil 🌍
Someone is currently in Unknown, Earth 