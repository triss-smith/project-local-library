function findAccountById(accounts, id) {
  return accounts.find((array) => array.id == id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((element1,element2) => element1.name.last.toLowerCase() < element2.name.last.toLowerCase() ? -1 : 1)

}

function numberOfBorrows(account, books) {
  let bookBorrows = 0;
  let accountId = account.id;
  for(let i = 0; i < books.length; i++) {
    bookBorrows += books[i].borrows.reduce((acc,array) => {
      if(array.id === accountId) {
        acc++;
      }
      return acc;
    }, 0)
  }
  return bookBorrows;  
}

function getBooksPossessedByAccount(account, books, authors) {
  let bookArray = [];
  let accountId = account.id;
  
  for(let i = 0; i < books.length; i++) {    
    let bookBorrows = books[i].borrows[0]    
    if(accountId === bookBorrows.id && bookBorrows.returned === false) {
        books[i].author = (authors.find((array) => array.id === books[i].authorId))
      bookArray.push(books[i]);         
    }
  }
  return bookArray;
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
