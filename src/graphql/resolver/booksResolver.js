const booksList = require('./data');

const getBooks = (args) => {
    return booksList;
}

const getBook = (args) => { 
    const id = args.id;
    return booksList.find(book => book.id == id);
}

const getBooksByTopic = (args) => {
    if (args.topic) {
        const topic = args.topic;
        return booksList.filter(book => book.topic === topic);
    } else {
        return booksList;
    }
}

const booksResolver = {
    books: getBooks,
    book: getBook,
    booksByTopic: getBooksByTopic
};

module.exports = booksResolver