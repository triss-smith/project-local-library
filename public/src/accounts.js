function findAccountById(accounts, id) {
  const correctAccount =  accounts.find((array) => array.id = id)

}

function sortAccountsByLastName(accounts) {}

function numberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
