class Book {
  constructor(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.currentPage = 0;
  }
}

class Reader {
  constructor(name) {
    this.name = name;
    this.favoriteBooks = [];
  }

  markPageRead(book, page) {
    book.currentPage = page;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.readers = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  addReader(reader) {
    this.readers.push(reader);
  }

  searchBooks(keyword) {
    return this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(keyword.toLowerCase()) ||
        book.author.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}

const library = new Library();

// Adding some books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
const book3 = new Book("1984", "George Orwell", 328);
const book4 = new Book("Ana Karenjina", "Fjodor M Gredor", 485) 

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4)

// Adding readers
const reader1 = new Reader("Alice");
const reader2 = new Reader("Bob");
const reader3 = new Reader("Munevera")

library.addReader(reader1);
library.addReader(reader2);
library.addReader(reader3);

// Marking pages as read
reader1.markPageRead(book1, 50);
reader1.markPageRead(book2, 100);
reader2.markPageRead(book1, 30);
reader3.markPageRead(book4, 150)

// Displaying books
const availableBooksElement = document.getElementById("available-books");
library.books.forEach((book) => {
  const li = document.createElement("li");
  li.textContent = `${book.title} by ${book.author}`;
  availableBooksElement.appendChild(li);
});

// Displaying readers
const readerListElement = document.getElementById("reader-list");
library.readers.forEach((reader) => {
  const li = document.createElement("li");
  li.textContent = reader.name;
  readerListElement.appendChild(li);
});