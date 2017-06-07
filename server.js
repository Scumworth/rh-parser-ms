'use strict';

const express = require('express');
const hbs = require('hbs');
const rh = require('./utils/request-handler');

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs');
});

app.get('/whoami', (req, res) => {
    const userObj = rh.getUserObj(req);
    res.send(userObj);
});

app.listen(port, () => {
    console.log(`Up on port ${port}`);
})

