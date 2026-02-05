const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID()

    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}\n
        UUID: ${id}`
    }
}

function addBook(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

function displayBooksOnPage() {
    const container = document.getElementById('bookContainer')
    for (let i=0; i < myLibrary.length; i++) {
        const book = myLibrary[i]
        const bookCard = document.createElement('div')
        bookCard.classList.add('card')

        const titleLabel = document.createElement('p')
        titleLabel.textContent = "Title: " + book.title
        bookCard.appendChild(titleLabel)
        const authorLabel = document.createElement('p')
        authorLabel.textContent = "Author: " + book.author
        bookCard.appendChild(authorLabel)
        const pagesLabel = document.createElement('p')
        pagesLabel.textContent = "Pages: " + book.pages
        bookCard.appendChild(pagesLabel)
        const readLabel = document.createElement('p')
        readLabel.textContent = "Read: " + book.read
        bookCard.appendChild(readLabel)

        container.appendChild(bookCard)
    }
}

addBook('title', 'auth', '111', 'nope')
addBook('title2', 'auth', '211', 'nope')

displayBooksOnPage()