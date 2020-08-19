const booksList = require('./data');

const getBooks = (args) => {
    return booksList;
}

const booksResolver = {
    books: getBooks
};

module.exports = booksResolver