const express = require('express');
const path = require('path');
const app = express();
const candidate = require('./data/candidate.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/cv', (req, res) => {
    res.render('cv', { candidate });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
