const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// Clue: Array method - push()
const title = [];
function getTitles(books) {
  // Your code
  for (let book of books) {
    // console.log(`${book.title}`);
    title.push(book.title);
  }
  return title;
}

console.log(getTitles(books));
// ["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]
