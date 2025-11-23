const myLibrary = [];

class Book {
    constructor(title, author, genre, id, read) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.id = id;
        this.read = read;
    }
    
}

function addBookToLibrary(title, author, genre) {
    let id = crypto.randomUUID();
    const item = new Book(title, author, genre, id); // id and read defaulted in Book
    myLibrary.push(item);
}

function displayBooks() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    myLibrary.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.setAttribute("data-id", book.id);
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <p>${book.genre}</p>
            <button class="read${book.read ? '' : ' no'}">Read: ${book.read ? "yes" : "no"}</button>
            <button class="remove-book">Remove Book</button>
        `;
        container.appendChild(bookDiv);
    }) };

function removeBook(id) {
    const bookIndex = myLibrary.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
        displayBooks();
    }
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-book")) {
        const bookDiv = event.target.closest(".book");
        const bookId = bookDiv.getAttribute("data-id");
        removeBook(bookId);
    }
    if (event.target.classList.contains("read")) {
        const bookDiv = event.target.closest(".book");
        const bookId = bookDiv.getAttribute("data-id");
        const book = myLibrary.find(b => b.id === bookId);
        if (book) {
            book.read = !book.read;
            displayBooks();
        }
    }
});

// Initial book for testing
addBookToLibrary("No Longer Human", "Dazai Osamu", "Depression");
displayBooks();


const addBook = document.querySelector(".add-book");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModal = document.querySelector("#closeModal");
const bookForm = document.querySelector("#bookForm");

addBook.addEventListener("click", () => {
        modalOverlay.style.display = "flex"; //show modal
});

closeModal.addEventListener("click", () => {
    modalOverlay.style.display = "none"; //hide modal
})

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const genre = document.querySelector("#genre").value;

    addBookToLibrary(title, author, genre);
    displayBooks();

    bookForm.reset();
    modalOverlay.style.display = "none";
});


