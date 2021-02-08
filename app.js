'use strict';
const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3333;

const express = require('express');
const session = require('express-session');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(session({
    secret: 'ricepatties96',
    resave: false,
    saveUninitialized: false,
    is_logged_in: false
}));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index');
const bookController = require('./routes/books');
const usersController = require('./routes/users');

app.use('/', rootController);
app.use('/books', bookController);
app.use('/users', usersController);