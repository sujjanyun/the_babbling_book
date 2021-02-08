'use strict';
const express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
    // const parkList = await ParksModel.getAll();

    res.render('template', {
        locals: {
            title: 'Hello',
        },
        partials: {
            body: 'partials/home',
        },
    });
});

module.exports = router;