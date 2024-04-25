function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log("New book added!");
  console.log(myLibrary);
}

const books = [
  {title: 'The Women: A Novel', author: 'Kristin Hannah', pages: 480, read: false},
  {title: 'The Familiar', author: 'Leigh Bardugo', pages: 880, read: false},
  {title: 'Fourth Wing', author: 'Rebecca Yarros', pages: 528, read: false},
  {title: 'Toxic Prey', author: 'John Sandford', pages: 400, read: false},
]

const myLibrary = [];
const addBookEntryBtn = document.querySelector(".add-btn");

// modal elements
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