function findAuthorById(authors, id) {
  return authors.find((array) => array.id === id)
}

function findBookById(books, id) {
  return books.find((array) => array.id === id)
}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
