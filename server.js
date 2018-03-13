const express = require('express');
const handlebars = require('hbs');

const port = 8000;
let app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express lel</h1>');
    res.send({
        name: 'ylel',
        likes: [
            'sups',
            'lel'
        ]
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Something bad'
    });
});

app.listen(port, () => {
    console.log('Server is up on: ' + port);
});
