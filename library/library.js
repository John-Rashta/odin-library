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
