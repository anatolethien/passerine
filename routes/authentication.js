const express = require('express');
const sqlite3 = require('sqlite3');

const authentication = express.Router();
const database = new sqlite3.Database('assets/database.db');

authentication.post('/register', (req, res) => {
    res.status(200).send(req.body);
});

module.exports = authentication;
