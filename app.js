const path = require('path');
const express = require('express');

const app = express();
const port = 5000;

const page = require('./routes/page');
const static = require('./routes/static');
const authentication = require('./routes/authentication');

// middleware
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// route middleware
app.use('/', page);
app.use('/static', static);
app.use('/api/authentication', authentication);

app.listen(port, () => {
    console.log(`App running at http://127.0.0.1:${port}`);
});
