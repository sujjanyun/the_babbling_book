'use strict';
const express = require('express'),
    router = express.Router(),
    bcrypt = require('bcryptjs'),
    UsersModel = require('../models/users');

router.get('/signup', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Register for an Account',
        },
        partials: {
            body: 'partials/signup',
        },
    });
});

router.get('/login', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'User Login',
        },
        partials: {
            body: 'partials/login',
        },
    });
});

router.post('/signup', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const response = await UsersModel.addUser(
        first_name, 
        last_name, 
        email, 
        password
    );
    const salt = bcrypt.genSaltSync(10);
    res.sendStatus(500);
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('login', email, password);
    res.sendStatus(500);
});

module.exports = router;