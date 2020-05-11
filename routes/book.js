const express = require('express');
const router = express.Router();

const Book = require('../controller/book');

router.get('/:id', async (req, res) => {
  let id = req.params.id;

  let { title, author, image, url, year, description } = await Book.getDetails(
    id
  );

  console.log(title);

  res.render('book', { title, author, image, url, year, description });
});

module.exports = router;
