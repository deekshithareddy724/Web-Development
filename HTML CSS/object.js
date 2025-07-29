// Book Object
class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isBorrowed = false;
  }

  borrow() {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`You have borrowed "${this.title}".`);
    } else {
      console.log(`"${this.title}" is already borrowed.`);
    }
  }

  returnBook() {
    if (this.isBorrowed) {
      this.isBorrowed = false;
      console.log(`You have returned "${this.title}".`);
    } else {
      console.log(`"${this.title}" was not borrowed.`);
    }
  }
}

// Library Object
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Book "${book.title}" added to the library.`);
  }

  findBookByISBN(isbn) {
    return this.books.find(book => book.ISBN === isbn);
  }

  listAvailableBooks() {
    return this.books.filter(book => !book.isBorrowed);
  }

  listBorrowedBooks() {
    return this.books.filter(book => book.isBorrowed);
  }
}

// Example usage:

// Create some books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456");
const book2 = new Book("1984", "George Orwell", "7891011");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", "12131415");

// Create a library
const library = new Library();

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Borrow a book
book1.borrow();

// List available books
console.log("Available Books:");
library.listAvailableBooks().forEach(book => console.log(book.title));

// List borrowed books
console.log("Borrowed Books:");
library.listBorrowedBooks().forEach(book => console.log(book.title));

// Find a book by ISBN
const foundBook = library.findBookByISBN("7891011");
console.log(`Found Book: ${foundBook.title}`);
