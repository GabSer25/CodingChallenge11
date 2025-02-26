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