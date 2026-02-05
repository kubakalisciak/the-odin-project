const myLibrary = []

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID()

    this.info = function() {
        return `${title} by ${author}, ${pages}, ${isRead}\n
        UUID: ${id}`
    }
}

function addBook(title, author, pages, isRead) {
    myLibrary.push(new Book(title, author, pages, isRead))
}

function displayBooksOnPage() {
    const container = document.getElementById('bookContainer')
    for (let i=0; i < myLibrary.length; i++) {
        const book = myLibrary[i]
        const bookCard = document.createElement('div')
        bookCard.classList.add('card')

        bookCard.appendChild(generateBookLabel(book, 'title', 'h2', ''))
        bookCard.appendChild(generateBookLabel(book, 'author', 'p', 'Author: '))
        bookCard.appendChild(generateBookLabel(book, 'pages', 'p', 'Pages: '))
        bookCard.appendChild(generateBookLabel(book, 'isRead', 'p', 'Is read? '))

        container.appendChild(bookCard)
    }
}

function generateBookLabel(object, property, type, text) {
    const label = document.createElement(type)
    label.textContent = text + object[property]
    return label
}

addBook('title', 'author', 'pages', true)
addBook('title', 'author', 'pages', true)
addBook('title', 'author', 'pages', true)
addBook('title', 'author', 'pages', true)
addBook('title', 'author', 'pages', true)


displayBooksOnPage()