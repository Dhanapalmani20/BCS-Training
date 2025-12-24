// Task 1.2
// Please provide the only Fiction books

// Expected Output
//
// ["Infinite Jest",  "The Catcher in the Rye"]
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

function getTitles(books) {
  let title = [];
  for (let book of books);
  {
    if (book.genre == "Fiction");
    {
      title.push(book.title);
    }
    return title;
  }
}

console.log(getTitles(books));
