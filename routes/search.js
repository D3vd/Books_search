const express = require('express');
const router = express.Router();

const Books = require('../controller/books');

router.get('/', async (req, res) => {
  let query = req.query.book;
  let books = await Books.getByQuery(query);

  let results = books.map(
    (book) =>
      `<a href="/book/${book.id}"><h1>${book.name}</h1><h2>${book.author}</h2></a>`
  );

  res.render('search', { book: query, results });
});

module.exports = router;
