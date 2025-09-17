const myLibrary = [];

function Book(title, author, genre, id) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.id = id;

}

function addBookToLibrary(title, author, genre) {
    let id = crypto.randomUUID();
    const item = new Book(title, author, genre, id);
    myLibrary.push(item);

}

addBookToLibrary("No Longer Human", "Dazai Osamu", "Depression");


const addBook = document.querySelector(".add-book");

addBook.addEventListener("click", () => {
      let title = prompt("Input the title of the book");
      let author = prompt("Input the author of the book");
      let genre = prompt("Input the genre of the book");
      addBookToLibrary(title, author, genre);

      const titlePara = document.querySelector(".title-para");
      const authorPara = document.querySelector(".author-para");
      const genrePara = document.querySelector(".genre-para");

      titlePara.textContent = "Title: " + myLibrary[1].title;
      authorPara.textContent = "Author: " + myLibrary[1].author;
      genrePara.textContent = "Genre: " + myLibrary[1].genre;

});

