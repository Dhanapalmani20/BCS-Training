// function introduceWizard({ title = "Master", name, wand: { core } }) {
//   return `🪄 ${title} ${name} wields a wand with ${core}.`;
// }

const introduceWizard = ({ title = "Master", name, wand: { core } }) =>
  `🪄 ${title} ${name} wields a wand with ${core}.`;

const wizard = {
  name: "Merlin",
  title: "Archmage",
  wand: { core: "Phoenix Feather" },
};

console.log(introduceWizard(wizard));
