class Book {
  constructor(naslov, autor, brStrana) {
    this.naslov = naslov;
    this.autor = autor;
    this.brStrana = brStrana;
    this.trStrana = 0;
  }
  citanje(strana) {
    this.brStrana = strana;
  }
}

class Reader {
  constructor(ime) {
    this.ime = ime;
    this.omiljeneKnjige = [];
  }
  //   addFavBook(knjiga) {
  //     this.omiljeneKnjige.push(knjiga);
  //   }

  oznaceneStranice(knjiga, strana) {
    knjiga.trStrana = strana;
  }

  addOmiljenuKnjigu(knjiga) {
    this.omiljeneKnjige.push(knjiga);
  }
}

class Biblioteka {
  constructor() {
    this.listaKnjiga = [];
  }
  addBooks(knjiga) {
    this.listaKnjiga.push(knjiga);
  }
  pretragaKnjiga(trazenaRec) {
    const pretraga = this.listaKnjiga.filter((knjiga) => {
      knjiga.naslov.toLowerCase().includes(trazenaRec.toLowerCase()) ||
        knjiga.autor.toLowerCase().includes(trazenaRec.toLowerCase());
    });
    return pretraga;
  }

  informacijeKnjige(knjiga) {
    console.log(`Autor: ${knjiga.autor}`);
    console.log(`Nalov: ${knjiga.naslov}`);
    console.log(`Br. strana: ${knjiga.brStrana}`);
  }
}

/////////////////////////////////////////////////

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.currentPage = 0;
  }

  readPage(page) {
    if (page < 0 || page > this.pages) {
      console.log("Invalid page number");
      return;
    }
    this.currentPage = page;
    console.log(`You are now on page ${this.currentPage}`);
  }
}

class Reader {
  constructor(name) {
    this.name = name;
    this.favoriteBooks = [];
  }

  addFavoriteBook(book) {
    this.favoriteBooks.push(book);
    console.log(`${book.title} added to favorites for ${this.name}`);
  }

  markPageRead(book, page) {
    book.readPage(page);
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`${book.title} added to the library`);
  }

  searchBook(title) {
    const foundBooks = this.books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
    console.log(`Found ${foundBooks.length} books matching "${title}"`);
    return foundBooks;
  }

  displayBookInfo(book) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Pages: ${book.pages}`);
  }

  trackReadingProgress(reader) {
    console.log(`${reader.name}'s reading progress:`);
    reader.favoriteBooks.forEach((book) => {
      console.log(`${book.title}: Page ${book.currentPage}/${book.pages}`);
    });
  }
}

// Inicijalizacija knjiga
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
const book3 = new Book("1984", "George Orwell", 328);

// Inicijalizacija korisnika
const reader1 = new Reader("Alice");
const reader2 = new Reader("Bob");

// Inicijalizacija biblioteke
const library = new Library();

// Dodavanje knjiga u biblioteku
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Dodavanje omiljenih knjiga korisnicima
reader1.addFavoriteBook(book1);
reader1.addFavoriteBook(book2);
reader2.addFavoriteBook(book2);
reader2.addFavoriteBook(book3);

// Oznacavanje procitanih stranica
reader1.markPageRead(book1, 50);
reader2.markPageRead(book2, 100);

// Prikaz informacija o knjigama
library.displayBookInfo(book1);
library.displayBookInfo(book2);

// Pretraga knjiga
library.searchBook("mockingbird");

// Pracenje napretka u citanju
library.trackReadingProgress(reader1);
library.trackReadingProgress(reader2);
