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
  let genreArray = [];
  let unsortedArray = [];
  let finalArray = []
  books.forEach((element) => {
    if(!genreArray.includes(element.genre)){
      genreArray.push(element.genre)}})

  genreArray.forEach((element) => books.forEach((bookElement) => {if(element != bookElement.genre){
    unsortedArray[element] = 1;
  }
  else{unsortedArray[element] += 1}
  
}))

let genreKeys = Object.keys(unsortedArray)
let genreValues = Object.values(unsortedArray);
for(let i = 0; i < genreKeys.length; i++) {
  finalArray.push({"name":genreKeys[i],"count":genreValues[i]})
}
finalArray.sort((a,b) => b.count < a.count ? -1:1)
console.log(finalArray)
  return finalArray;
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

function getMostPopularAuthors(books, authors) {}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
