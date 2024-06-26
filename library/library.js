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
    readButton.classList.toggle("ReadButton");
    if (book.read) {
        readButton.classList.toggle("read");
    }
    readButton.addEventListener("click", (event) => {
        book.read = !book.read;
        event.target.classList.toggle("read");
       


    })

}
