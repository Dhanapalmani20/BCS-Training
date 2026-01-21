// # URL

// https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital

// # Task 1.1

// - Get all countries common name
// - Output
// `['China', 'India', .... 250 countries]`

fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
)
  .then((res) => res.json())// respones object
  .then((names) => names.map((name1) => name1.name.common))
  .then((data) => console.log(data));
