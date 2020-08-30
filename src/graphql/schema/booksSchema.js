const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
      books: [Book]
      booksByTopic(topic: String): [Book]
      book(id: Int!): Book
    },
    type Book {
      id: Int
      title: String
      author: String
      description: String
      category: String
    }
`);

module.exports = schema