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
console.log(addBookEntryBtn);
addBookEntryBtn.onclick = function () {
  console.log("Add new book clicked!");
};
