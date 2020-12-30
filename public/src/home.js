function arraySlicer(array) {
  return array.slice(0,5)
}

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
return arraySlicer(finalArray);
}


 
function getMostPopularBooks(books) {  
 
 books.sort((a,b) => b.borrows.length - a.borrows.length)
let popularBooks = books.map(element => {
  let bookObject = {};
  let title = element.title;
 let borrows = element.borrows.length;
  bookObject = {"name":title,"count":borrows};
  return bookObject;
}); 
 return popularBooks.slice(0,5);
}

function getMostPopularAuthors(books, authors) { 
  let authorBooksArray = [];  
  let finalArray = [];
   
  books.forEach((bookElement) => {
      let bookBorrows = bookElement.borrows.length;
      let bookAuthorId = bookElement.authorId;
    authorBooksArray.push({bookAuthorId : bookBorrows});})
    let authorKeys = Object.keys(authorBooksArray);
    let authorValues = Object.values(authorBooksArray);
  for(let i = 0; i < authorBooksArray.length; i++) {

    finalArray.push({"name": `${authors[i].name.first} ${authors[i].name.last}`, "count": authorValues[i].bookAuthorId})
  }
  finalArray.sort((a,b) => b.count < a.count ? -1:1)
  return arraySlicer(finalArray);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
}
