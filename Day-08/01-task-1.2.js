// ### Task 1.2 – 🧒 or 👨?

// Create a function `checkAgeCategory(age = 18)`

// ---

// #### 🛠️ Setup Code

// ```js
// console.log(checkAgeCategory());
// console.log(checkAgeCategory(12));
// console.log(checkAgeCategory(65));
// ````

// ---

// #### ✅ Output

// ```
// 👨 Adult
// 🧒 Minor
// 🧓 Senior
// ```

// Case 1: age >= 60
// Case 2:  18 <= age < 60
// Case 3:  age < 18

function checkAgeCategory1(age = 18) {
  if (age >= 60) {
    return "🧓 Senior";
  } else if (age >= 18) {
    return "👨 Adult";
  } else if (age < 18) {
    return "🧒 Minor";
  }
}

function checkAgeCategory2(age = 18) {
  if (age >= 60) {
    return "🧓 Senior";
  } else if (age >= 18) {
    return "👨 Adult";
  } else {
    return "🧒 Minor";
  }
}

function checkAgeCategory(age = 18) {
  if (age >= 60) {
    return "🧓 Senior";
  } else if (age >= 18) {
    return "👨 Adult";
  }

  return "🧒 Minor";
}

// Make it work then make it better

// console.log(checkAgeCategory());
// console.log(checkAgeCategory(12));
// console.log(checkAgeCategory(65));

// ### Task 1.3 – 🪄 Wizard Intro

// Create a function `introduceWizard(wizardObj)`

// ---

// #### 🛠️ Setup Code

// ```js
// const wizard = { name: "Merlin", title: "Archmage", wand: { core: "Phoenix Feather" } };
// console.log(introduceWizard(wizard));
// ````

// ---

// #### ✅ Output

// ```
// 🪄 Archmage Merlin wields a wand with Phoenix Feather core.
// ```

function introduceWizard1(wizardObj) {
  return `🪄 ${wizardObj.title} ${wizardObj.name} wields a wand with ${wizardObj.wand.core}.`;
}

function introduceWizard2(wizardObj) {
  const {
    title,
    name,
    wand: { core },
  } = wizardObj;

  return `🪄 ${title} ${name} wields a wand with ${core}.`;
}

function introduceWizard({ title = "Master", name, wand: { core } }) {
  return `🪄 ${title} ${name} wields a wand with ${core}.`;
}

const wizard = {
  name: "Merlin",
  title: "Archmage",
  wand: { core: "Phoenix Feather" },
};

// console.log(introduceWizard(wizard));

// ### Task 1.4 – 📦 Combine & Add

// Create a function `mergeInventory(existing, incoming)`

// ---

// #### 🛠️ Setup Code

// ```js
// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];
// console.log(mergeInventory(shelf, delivery));
// ````

// ---

// #### ✅ Output

// ```
// ["🍎", "🥪", "🍫", "🍇", "🧃"]
// ```

const shelf = undefined;
const delivery = ["🍫", "🍇"];

function mergeInventory1(shelf, delivery) {
  return [...shelf, ...delivery];
}

function mergeInventory2(shelf, delivery) {
  return shelf.concat(delivery);
}

// Only works if delivery is undefined
function mergeInventory(shelf = [], delivery = []) {
  return [...shelf, ...delivery];
}

// []
// console.log(mergeInventory(shelf, delivery));

// ### Task 1.5 – 🎒 Bag Check

// Create a function `packBag(owner = "Anon", ...items)`

// ---

// #### 🛠️ Setup Code

// ```js
// console.log(packBag("Natasha", "💄", "🔫"));
// console.log(packBag());
// ````

// ---

// #### ✅ Output

// ```
// 🎒 Natasha's bag contains: 💄, 🔫
// 🎒 Anon's bag is empty.
// ```

function packBag(owner = "Anon", ...items) {
  //   console.log("items", items);

  if (items.length === 0) {
    return `🎒 ${owner}'s bag is empty.`;
  }

  return `🎒 ${owner}'s bag contains: ${items}`;
}

console.log(packBag("Natasha", "💄", "🔫"));
console.log(packBag());
