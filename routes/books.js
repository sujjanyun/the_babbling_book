const express = require('express'),
    router = express.Router();
    BooksModel = require('../models/books'),
    // ReviewsModel = require('../models/reviews');

router.get('/', async (req, res, next) => {
    const bookData = await BooksModel.getAll();

    res.render('template', {
        locals: {
            title: 'List of Books',
            bookData: bookData,
        },
        partials: {
            body: 'home',
        },
    });
});

router.get('/:book_id?', async (req, res, next) => {
    const bookId = req.params.book_id,
        Book = new BooksModel(bookId),
        bookData = await Book.getBookData();
    // const Reviews = new ReviewsModel(null, parkId),
    //     reviewData = await Reviews.getParkReviews();

    res.render('template', {
        locals: {
            title: bookData.name,
            bookData,
            // reviewData,
        },
        partials: {
            body: 'partials/book',
        },
    });
});

module.exports = router;
