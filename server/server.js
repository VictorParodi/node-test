const express = require('express');
let app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({
        error: 'Page not found',
        user: 'Admin'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Allison',
            age: 25
        },

        {
            name: 'Kate',
            age: 22
        },

        {
            name: 'Ana',
            age: 29
        }
    ]);
});

app.listen(port, () => {
    console.log(`The application is running on port ${port}`);
});

module.exports = {
    app
}