// Task 1: Creating a Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title; // Book title
        this.author = author; // Book author
        this.isbn = isbn; // Unique identifier for the book
        this.copies = copies; // Number of copies available
    }

    // Book details as a formatted string
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    // Update the number of copies when borrowed or returned
    updateCopies(quantity) {
        this.copies += quantity;
    }
}
// Test
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());  // Expected output: Book details

book1.updateCopies(-1);  // Borrowing one copy
console.log(book1.getDetails());  // Expected output: Copies reduced by 1

// Task 2: Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name; // Borrower's name
        this.borrowerId = borrowerId; // Unique borrower ID
        this.borrowedBooks = []; // List of borrowed book titles
    }

    // Borrow a book (adds to borrowed list)
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    // Return a book (removes from borrowed list)
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(title => title !== book);
    }
}
// Test
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);  // Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);  // Expected output: []

// Task 3: Creating a Library Class
class Library {
    constructor() {
        this.books = [];  // Collection of book instances
        this.borrowers = [];  // Collection of borrower instances
    }

    // Add a new book to the library
    addBook(book) {
        this.books.push(book);
    }

    // List all books in the library
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
} 

// Test 
const library = new Library(); 
library.addBook(book1);
library.listBooks();  // Expected output: Details of "The Great Gatsby"

