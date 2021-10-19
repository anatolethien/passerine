const path = require('path');
const express = require('express');

const page = express.Router();

page.get('/', (req, res) => {
    res.status(200).render('index');
});

page.get('/register', (req, res) => {
    res.status(200).render('register');
});

module.exports = page;
