const { books, authors, topics } = require('./data');

const getBooks = (args) => {
    console.log("[booksResolver][getBooks][args:" , args , "]")
    return books;
}

const getBook = (args) => { 
    console.log("[booksResolver][getBook][args:" , args , "]")
    const id = args.id;
    return books.find(book => book.id == id);
}

const getBooksByTopic = (args) => {
    console.log("[booksResolver][getBooksByTopic][args:" , args , "]")
    if (args.topic) {
        const topicName = args.topic;
        return books.filter(book => book.topic.name === topicName);
    } else {
        return books;
    }
}

const getAuthors = (args) => {
    console.log("[booksResolver][getAuthors][args:" , args , "]")
    if (args.id) {
        const id = args.id;
        return authors.filter(author => author.id === id);
    } else {
        return authors;
    }
}

const getTopics = (args) => {
    console.log("[booksResolver][getTopics][args:" , args , "]")
    if (args.id) {
        const id = args.id;
        return topics.filter(topic => topic.id === id);
    } else {
        return topics;
    }
}

const booksResolver = {
    books: getBooks,
    book: getBook,
    booksByTopic: getBooksByTopic,
    authors: getAuthors,
    topics: getTopics,  
};

module.exports = booksResolver