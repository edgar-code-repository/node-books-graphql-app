const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.json({ info: 'Books App - Node.js / Express' })
})

module.exports = app;