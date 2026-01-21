//Task 1.2 🌍
// Print names of countries with a population of more than 10,000,000 (1 crore). Sort them in descending order of population.

// Output Format:

// ["India", "China", "Russia", ...]

fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
)
  //   .then((res) => res.json())
  //   .then((names) => names.filter((name1) => name1.population >= 10000000))
  //   .then(counties => counties.toSorted((a, b) => b.population - a.population))
  //   .then((num) => num.map((hari) => hari.name.common))
  //   .then((data) => console.log(data));
  .then((res) => res.json())
  .then((num) =>
    num
      .filter((name1) => name1.population >= 1_00_00_000)
      .toSorted((a, b) => b.population - a.population)
      .map((hari) => hari.name.common),
  )
  .then((data) => console.log(data));
