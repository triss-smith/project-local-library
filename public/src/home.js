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

function getMostCommonGenres(books) {
  let popularGenres = [];
  popularGenres.push({"name": books[0].genre, "count": 1});
  for(let i = 1; i < books.length; i++) {
    console.log(popularGenres[books[i].genre].name === books[i].genre)
    if(popularGenres[books[i].genre] === books[i].genre) {
      popularGenres[books[i].genre].count ;
    }
    else {popularGenres.push({"name": books[i].genre, "count": 1})}
  }

console.log(popularGenres)
}

    

/*let popularGenres = []
for(let i = 0; i < books.length; i++) {
  if(!popularGenres.name == books[i].genre) {
    popularGenres()
  }
}
return popularBooks;*/


function getMostPopularBooks(books) {
  
 
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
