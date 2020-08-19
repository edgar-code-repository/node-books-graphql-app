const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
      books: [Book]
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