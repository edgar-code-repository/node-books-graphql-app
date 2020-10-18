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
      authors: [Author]
      description: String
      topic: Topic
      imageUrl: String
    },
    type Author {
      id: Int
      firstName: String
      lastName: String
    },
    type Topic {
      id: Int
      name: String
    }    
`);

module.exports = schema