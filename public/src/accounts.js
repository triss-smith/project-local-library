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

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
