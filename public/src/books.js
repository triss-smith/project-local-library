function findAuthorById(authors, id) {
  return authors.find((array) => array.id === id)
}

function findBookById(books, id) {
  return books.find((array) => array.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let booksOut = [];
  let booksAvailable = [];
  let booksTotalArray = []
  for(let i = 0; i < books.length; i++) {
    if(books[i].borrows[0].returned) {
      booksAvailable.push(books[i])
    }
    else {
      booksOut.push(books[i])
    }
  }
  booksTotalArray.push(booksOut)
  booksTotalArray.push(booksAvailable)
  return booksTotalArray;
}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
