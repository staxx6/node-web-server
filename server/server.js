const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'aye'
    });
});

app.get('/user', (req, res) => {
    res.send([
            {name: 'well'},
            {name: 'yes'}
        ]);
});

app.listen(8000);

module.exports.app = app;
