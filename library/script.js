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

function displayBooksOnPage(list) {
    const container = document.getElementById('bookContainer')
    for (let i = 0; i < list.length; i++) {
        const book = list[i]
        const bookCard = document.createElement('div')
        bookCard.classList.add('card')
        bookCard.id = book.id

        bookCard.appendChild(generateBookLabel(book, 'title', 'h2', ''))
        bookCard.appendChild(generateBookLabel(book, 'author', 'p', 'Author: '))
        bookCard.appendChild(generateBookLabel(book, 'pages', 'p', 'Pages: '))
        bookCard.appendChild(generateBookLabel(book, 'isRead', 'p', 'Is read? '))
        
        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'Remove'
        removeBtn.addEventListener('click', () => {
            let bookId = book.id;
            for (let i=0; i < list.length; i++) {
                if (list[i].id === bookId) {
                    list.splice(i, 1)
                    redrawContainer(container, list)
                }
            }
        });

        bookCard.appendChild(removeBtn)

        container.appendChild(bookCard)
    }
}

function generateBookLabel(object, property, type, text) {
    const label = document.createElement(type)
    label.textContent = text + object[property]
    return label
}

function redrawContainer(container, list) {
    container.textContent = ''
    displayBooksOnPage(myLibrary)
}

addBook('title1', 'author', 'pages', true)
addBook('title2', 'author', 'pages', true)
addBook('title3', 'author', 'pages', true)
addBook('title4', 'author', 'pages', true)
addBook('title5', 'author', 'pages', true)


displayBooksOnPage(myLibrary)