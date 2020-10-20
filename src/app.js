const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema/booksSchema');
const booksResolver = require('./graphql/resolver/booksResolver');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: booksResolver,
    graphiql: true,
}));

app.get('/', (request, response) => {
    response.json({ info: 'Books App - NodeJS / Express / GraphQL' })
})

module.exports = app;