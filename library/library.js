const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = boolean(read);
}

function addBookToLibrary(title, author, pages, read) {

    const userBook = new Book(title, author, pages, read);
    myLibrary.push(userBook);
}

function displayBooks() {

    
}

function makeCard(book) {


    const readButton = document.createElement("button");
    readButton.textContent = "Read";
    if (book.read) {
        readButton.classList.toggle("read");
    }
    readButton.addEventListener("click", (event) => {
        book.read = !book.read;
        event.target.classList.toggle("read");
       
    })

}


const dialog = document.querySelector("dialog");
const addButton = document.querySelector(".add");
const submitButton = document.querySelector("#submit");

addButton.addEventListener("click", () => {

    dialog.showModal();

});

submitButton.addEventListener("click", (event) => {

    event.preventDefault();
    const bookform = document.querySelector("#bookform");
    const formData = new FormData(bookform);
    dialog.close();

})


