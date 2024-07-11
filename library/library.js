const myLibrary = [];

class Book {
    constructor(title, author, pages, read){

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = Boolean(read);

    }

    get title() {

        return this._title;
    }

    set title(value) {

        this._title = value;
    }

    get author() {

        return this._author;
    }

    set author(value) {

        this._author = value;
    }

    get pages() {

        return this._pages;
    }

    set pages(value) {

        this._pages = value;
    }

    get read() {

        return this._read;
    }

    set read(value) {

        this._read = value;
    }

    status() {

        this._read = !this._read;
    }

}


function addBookToLibrary(title, author, pages, read) {

    const userBook = new Book(title, author, pages, read);
    myLibrary.push(userBook);
    makeCard(userBook);
}

///Clear grid and loop to display every book
function displayBooks() {

    const bookGrid = document.querySelector(".main");
    while (bookGrid.firstChild) {
        bookGrid.removeChild(bookGrid.firstChild);
    }
    myLibrary.forEach((book) => makeCard(book));

    
}


///create a book card along with its numbers and append to main grid
function makeCard(book) {
    const main = document.querySelector(".main");

    const mainDiv = document.createElement("div");

    const titleDiv = document.createElement("div");
    titleDiv.textContent = book.title;

    const authorDiv = document.createElement("div");
    authorDiv.textContent = book.author;

    const pagesDiv = document.createElement("div");
    pagesDiv.textContent = `${book.pages} pages`;

    const readDiv = document.createElement("div");
    readDiv.textContent = "Read";
    readDiv.classList.toggle("reading");
    
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.toggle("buttons-container");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.toggle("deletebutton");

    const readButton = document.createElement("button");
    readButton.textContent = "Read";
    readButton.classList.toggle("readbutton");
    
    if (book.read) {
        readDiv.classList.toggle("read");
    }
    
    readButton.addEventListener("click", () => {
        book.status();
        readDiv.classList.toggle("read");
        
       
    })

    deleteButton.addEventListener("click", () => {

        mainDiv.parentNode.removeChild(mainDiv);
        let bookIndex = myLibrary.indexOf(book);
        myLibrary.splice(bookIndex, 1);


    })

    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(readButton);


    mainDiv.appendChild(titleDiv);
    mainDiv.appendChild(authorDiv);
    mainDiv.appendChild(pagesDiv);
    mainDiv.appendChild(readDiv);
    mainDiv.appendChild(buttonsDiv);

    main.appendChild(mainDiv);
    


}


const dialog = document.querySelector("dialog");
const addButton = document.querySelector(".add");
const submitButton = document.querySelector("#submit");

addButton.addEventListener("click", () => {

    dialog.showModal();

});

/// Acess formdata when submit is pressed and send it to AddBook function
submitButton.addEventListener("click", (event) => {

    event.preventDefault();
    const bookform = document.querySelector("#bookform");
    const formData = new FormData(bookform);
    let title = formData.get("title");
    let author = formData.get("author");
    let pages = Number(formData.get("pages"));
    let read = (formData.get("status") === "true");
    addBookToLibrary(title, author, pages, read);
    dialog.close();

})


displayBooks();