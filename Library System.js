class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log("Book added ✅");
  }

  borrowBook(id) {
    let book = this.books.find(b => b.id === id && b.isAvailable);
    if (book) {
      book.isAvailable = false;
      console.log(`You borrowed: ${book.title}`);
    } else {
      console.log("Book not available ❌");
    }
  }

  returnBook(id) {
    let book = this.books.find(b => b.id === id);
    if (book) {
      book.isAvailable = true;
      console.log(`You returned: ${book.title}`);
    }
  }

  listBooks() {
    console.log("Library Books:");
    this.books.forEach(b =>
      console.log(`${b.id}. ${b.title} by ${b.author} - ${b.isAvailable ? "Available" : "Borrowed"}`)
    );
  }
}

// Usage
let lib = new Library();
lib.addBook(new Book(1, "JavaScript Basics", "John"));
lib.addBook(new Book(2, "Node.js Guide", "Mike"));

lib.listBooks();
lib.borrowBook(1);
lib.listBooks();
lib.returnBook(1);
lib.listBooks();
