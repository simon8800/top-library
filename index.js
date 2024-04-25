function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  
  const bookCard = createBookCard(newBook);
  shelf.appendChild(bookCard);
}

// Initialize empty library
let myLibrary = [];
const shelf = document.querySelector('.shelf');

// Dummy book data
const books = [
  {title: 'The Women: A Novel', author: 'Kristin Hannah', pages: 480, read: false},
  {title: 'The Familiar', author: 'Leigh Bardugo', pages: 880, read: false},
  {title: 'Fourth Wing', author: 'Rebecca Yarros', pages: 528, read: false},
  {title: 'Toxic Prey', author: 'John Sandford', pages: 400, read: false},
]

// Add dummy books to library
for (let book of books) {
  addBook(book.title, book.author, book.pages, book.read);
}

// Elements to make modal work
const addBookEntryBtn = document.querySelector(".add-btn");
const modal = document.querySelector('.form-modal');
const close = document.querySelector('.close');

// When user clicks Add Book Entry, open the modal
addBookEntryBtn.onclick = function () {
  modal.style.display = 'block';
};

// When user clicks on x, close the modal
close.onclick = function() {
  modal.style.display = 'none';
}

// When user clicks outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Create a bookCard given a book
function createBookCard(book) {
  const bookCard = document.createElement('li');
  bookCard.classList.add('book-card');

  const bookTitle = document.createElement('h3');
  bookTitle.textContent = `Title: ${book.title}`;

  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = `Author: ${book.author}`;

  const bookPages = document.createElement('p');
  bookPages.textContent = `Pages: ${book.pages}`;

  const bookStatus = document.createElement('p');
  bookStatus.textContent = `Status: ${book.read ? "Read" : "Not Read Yet"}`;

  const changeReadButton = document.createElement('button');
  changeReadButton.classList.add('btn', 'read')
  changeReadButton.textContent = `${book.read ? "Not Read Yet" : "Read"}`

  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'remove')
  removeButton.textContent = "Remove"
  removeButton.onclick = function(event) {
    myLibrary = myLibrary.filter(currentBook => currentBook.title != book.title);
    removeButton.parentElement.remove();
    console.log(myLibrary);
  }

  bookCard.appendChild(bookTitle)
  bookCard.appendChild(bookAuthor)
  bookCard.appendChild(bookPages)
  bookCard.appendChild(bookStatus)
  bookCard.appendChild(changeReadButton)
  bookCard.appendChild(removeButton)

  return bookCard;
}

const form = document.getElementById('book-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formValues = {};

  for (let element of form.elements) {
    if (element.name && element.name == 'read') {
      formValues[element.name] = element.value == 'on' ? true : false;
    } else if (element.name) {
      formValues[element.name] = element.value;
    }
  }

  console.log(formValues);
  modal.style.display = 'none';
})