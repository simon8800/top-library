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

const myLibrary = [];
const addBookEntryBtn = document.querySelector(".add-btn");
console.log(addBookEntryBtn);
addBookEntryBtn.onclick = function () {
  console.log("Add new book clicked!");
  let formContainer = document.querySelector(".form-container");

  // form creation
  let form = document.createElement("form");

  // inputs
  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Enter title";
  titleInput.id = "title";
  let titleLabel = document.createElement("label");
  titleLabel.htmlFor = "title";
  titleLabel.textContent = "Title:";

  let authorInput = document.createElement("input");
  authorInput.type = "text";
  authorInput.placeholder = "Enter author";
  authorInput.id = "author";
  let authorLabel = document.createElement("label");
  authorLabel.htmlFor = "author";
  authorLabel.textContent = "Author:";

  let pageInput = document.createElement("input");
  pageInput.type = "number";
  pageInput.placeholder = "Enter pages";
  pageInput.id = "page";
  let pageLabel = document.createElement("label");
  pageLabel.htmlFor = "page";
  pageLabel.textContent = "Pages:";

  let readInput = document.createElement("input");
  readInput.type = "checkbox";
  readInput.id = "read";
  let readLabel = document.createElement("label");
  readLabel.htmlFor = "read";
  readLabel.textContent = "Read:";

  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(authorLabel);
  form.appendChild(authorInput);
  form.appendChild(pageLabel);
  form.appendChild(pageInput);
  form.appendChild(readLabel);
  form.appendChild(readInput);
  formContainer.appendChild(form);
};
