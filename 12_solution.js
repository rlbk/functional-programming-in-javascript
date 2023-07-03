import { porduce } from "immer";

const book = {
  author: "Robert Kiyosaki",
  book: {
    name: "Rich Dad Poor Dad",
    price: "$8",
    rating: 4.7,
  },
};

const arrayOfBooks = ["Book1", "Book2", "Book3 "];

// Task 1 : Change the book price to $10 and rating to 4.8
// Task 2 : Replace "Book2" to "Book4" in arrayOfBooks

// solution for Task 1
const updatedBook = {
  ...book,
  book: {
    ...book.book,
    price: "$10",
    rating: 4.8,
  },
};
console.log(updatedBook);

// using immer
const immerUpdateBook = produce(book, (draftState) => {
  (draftState.book.price = "$10"), (draftState.book.rating = 4.8);
});

// solution fo Task 2
const updatedArrayOfBooks = arrayOfBooks.map((book) =>
  book === "book2" ? "book4" : book
);
console.log(updatedArrayOfBooks);
