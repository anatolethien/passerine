const path = require('path');
const express = require('express');

const static = express.Router();

static.use('/', express.static(path.join(__dirname, '../public')))

module.exports = static;
