// Global Functions

const getUserInput = (msg) => {
  const prompt = require('prompt-sync')({sigint: true});
  return prompt(`${msg}: `);
};

// Classes

class Library {
  name;
  books = [];

  constructor(name) {
    this.name = name;
  }

  addBook() {
    // Author + Title
    let author,
    title;

    while(1) {
      title = getUserInput("Book Title");

      const oldBook = ((title) => {
        for (let book of this.books) {
          if (book.title.toLowerCase() === title.toLowerCase()) {
            return true;
          }
        }

        return false;
      })(title);

      if (oldBook) {
        console.log("Book already exists");
      }
      else if (title.length === 0) {
        console.log("Invalid Book Title");
      } else {
        break;
      }
    }

    while(1) {
      author = getUserInput("Book Author");

      if (author.length === 0) {
        console.log("Invalid Author Name");
      }
      else {
        break;
      }
    }

    this.books.push({title, author});
    console.log("Book Added!\n");
  }

  searchBook() {
    const bookTitle = getUserInput("Book Title");

    const book = ((title) => {
      for (const book of this.books) {
        if (title.toLowerCase() === book.title.toLowerCase()) {
          return book;
        }
      }
    })(bookTitle);

    if (!book) {
      console.log("Book not found!");
    } else {
      console.log(`\n\tTitle: ${book.title}\n\tAuthor: ${book.author}\n`);
      return book;
    }
  }

  removeBook() {
    const bookTitle = getUserInput("Book Title");

    const book = ((title) => {
      for (const book of this.books) {
        if (title.toLowerCase() === book.title.toLowerCase()) {
          return book;
        }
      }
    })(bookTitle);

    if (!book) {
      console.log("Book not found!");
    } else {
      const bookIndex = this.books.findIndex((currentBook) => book.title === currentBook.title);
      const tempTitle = book.title;

      this.books.splice(bookIndex, 1);
      console.log(`\n\tRemoved Book: ${tempTitle}\n`);
    }
  }

  displayBooks() {
    if (this.books.length === 0) {
      console.log("No books in this Library!");
      return;
    }

    for (let book of this.books) {
      console.log(`\n\tTitle: ${book.title}\n\tAuthor: ${book.author}\n`);
    }
  }
}

// Driver Code

function main() {
  const library = new Library("FSD Library");
  let showMenu = true;

  while(showMenu) {
    console.log("\n\t\t Library \n\n");
    console.log("1. Display Books");
    console.log("2. Search a Book");
    console.log("3. Add Book");
    console.log("4. Remove Book");
    console.log("5. Exit \n");

    const optionInput = getUserInput("Option");

    switch(Number(optionInput)) {
      case 1:
        library.displayBooks();
        break;

      case 2:
        library.searchBook();
        break;
      
      case 3:
        library.addBook();
        break;

      case 4:
        library.removeBook();
        break;

      case 5:
        showMenu = false;
        break;

      default:
        console.log("\nInvalid Choice!\n");
    }
  }
}

main();