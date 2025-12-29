// ## Task 1.3 (Challenging)
// Please provide Highest rated books eg.(>= 4.7)

// ### Expected Output
// ```
// Highest rated books are: Sapiens, A Brief History of Time and Clean Code
// ```

// ````
// Case 1:
// There no books which are >= 4.7
// The are no good books available 😔

// Case 2:
// There is only one
// Highest rated books is Sapiens

// Case 3:
// There are two more
// Highest rated books are: Sapiens, A Brief History of Time and Clean Code

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

function getHighestRatedBooks() {
  // Your code
}

getHighestRatedBooks(books, 4.7); // Highest rated books are: Sapiens, A Brief History of Time and Clean Code
getHighestRatedBooks(books, 6); // The are no good books available 😔
getHighestRatedBooks(books, 4.9); // Highest rated books is Sapiens
