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
  let unsortedArray = [];
  let finalArray = [];
  
  books.forEach((bookElement) => {
    if(unsortedArray[bookElement.genre]){
    unsortedArray[bookElement.genre]++}  
    else{unsortedArray[bookElement.genre] = 1}  
  })
let genreKeys = Object.keys(unsortedArray)
let genreValues = Object.values(unsortedArray);
for(let i = 0; i < genreKeys.length; i++) {
  finalArray.push({"name":genreKeys[i],"count":genreValues[i]})
}
finalArray.sort((a,b) => b.count < a.count ? -1:1)
return finalArray.slice(0,5);
}


 
function getMostPopularBooks(books) {  
 let popularBooks = [];
 books.sort((a,b) => b.borrows.length - a.borrows.length)

 books.forEach((element) => {
 let title = element.title;
 let borrows = element.borrows.length
 popularBooks.push({"name":title, "count":borrows})})
 
 return popularBooks.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let authorIds = Object.values(authors.id);
  let authorBooksArray = [];
  
    books.forEach((bookElement) => {
      console.log(bookElement.borrows.length)
      if(authorBooksArray[bookElement.authorId]) {
        authorBooksArray[bookElement.authorId] += bookElement.borrows.length;
      } else {
        authorBooksArray[bookElement.authorId] = bookElement.borrows.length;
      }
    })
  
  console.log(authorBooksArray);
  
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
