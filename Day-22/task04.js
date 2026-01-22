// Get the top 10 most populated countries in descending order.

// Output Format:

// 1. India - 150000000
// 2. China - 120000000
// ...

fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
)
  .then((res) => res.json())
  .then((num) =>
    num
      .filter((name1) => name1.population >= 1_00_00_000)
      .toSorted((a, b) => b.population - a.population)
      .slice(1, 11)
      .map((num, ind) =>
        console.log(`${ind}:${num.name.common}:${num.population}`),
      ),
  );
