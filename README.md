Barebones idea for project  
CREATE book constructor
    WHEN used create a new book object with author, name, pages, read(boolean)
WHEN page is loaded run displayBooks  
    LOOP through all books and display them
    CALL card function for each  
CALL addBook to add new book to library  
    CALL book constructor to create new object  
    PUSH new book into library  
CALL a function to build a card for each book  
    ADD delete button that finds an index through the object passed (wanna try to not save the index directly cause it leads to problems)  
    ADD read button that toggles the read boolean   