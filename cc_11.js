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

addBorrower(borrower) {
        this.borrowers.push(borrower);
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

// Task 4: Implementing Book Borrowing

class MyLibrary {
    constructor() {
        this.books = [];      // Stores the list of books available in the library.
        this.borrowers = [];  // Stores the list of registered borrowers.
    }

    // Adds a book to the library collection
    addBook(book) {
        this.books.push(book);
    }

    // Registers a borrower in the library system
    addBorrower(borrower) {
        this.borrowers.push(borrower);
    }

    // Lists all books available in the library
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

    // Lends a book to a borrower if available
    lendBook(borrowerId, isbn) {
        // Find the book in the library using its ISBN
        const book = this.books.find(b => b.isbn === isbn);
        // Find the borrower using their borrower ID
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

        // Check if the book exists, has copies available, and the borrower is valid
        if (book && book.copies > 0 && borrower) {
            book.updateCopies(-1);        // Reduce book copies by 1
            borrower.borrowBook(book.title); // Add book title to borrower's borrowed list
            console.log(`"${book.title}" has been lent to ${borrower.name}.`);
        } else {
            console.log("Cannot lend book. Either book is unavailable or borrower ID is incorrect.");
        }
    }

    // Returns a borrowed book and updates the system
    returnBook(borrowerId, isbn) {
        // Find the book in the library using its ISBN
        const book = this.books.find(b => b.isbn === isbn);
        // Find the borrower using their borrower ID
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

        // Check if the book and borrower exist, and the borrower actually borrowed the book
        if (book && borrower && borrower.borrowedBooks.includes(book.title)) {
            book.updateCopies(1);         // Increase book copies by 1
            borrower.returnBook(book.title); // Remove book from borrower's borrowed list
            console.log(`"${book.title}" has been returned by ${borrower.name}.`);
        } else {
            console.log("Invalid return request. Either the book was not borrowed or borrower ID is incorrect.");
        }
    }
}

// Test 
const myLibrary = new MyLibrary(); // Create an instance of the library
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
const borrower2 = new Borrower("Alice Johnson", 201);

myLibrary.addBook(book2);       // Add the book to the library
myLibrary.addBorrower(borrower2); // Register the borrower

// Borrower tries to borrow the book
myLibrary.lendBook(201, 123456);

console.log(book2.getDetails()); // Expected: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower2.borrowedBooks); // Expected: ["The Great Gatsby"]

