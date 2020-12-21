function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  let bookBorrows = 0;
  for(let i = 0; i < books.length; i++) {
    if(books[i].borrows[0].returned == false) {
      bookBorrows++;
    }
  }
  return bookBorrows;
}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {
  let popularBooks = books.reduce((acc,element) => {
    if(acc.includes(element))     
    {acc[element.genre].count += element.borrows.length} 
    else {acc.push({"name": element.genre, "count": element.borrows.length})}
  return acc}, [])
console.log(popularBooks)
 
}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
