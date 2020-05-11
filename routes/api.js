const express = require('express');
const router = express.Router();

const Books = require('../controller/books');

router.get('/', (_, res) => {
  res.status(404).send('Invalid Route. Please check your request');
});

router.get('/books', async (_, res) => {
  let books = await Books.getAll();

  if (books === null || books.length === 0) {
    res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
    });
    return;
  }

  res.status(200).json({ books });
});

router.get('/book/:id', async (req, res) => {
  let id = req.params.id;

  let book = await Books.getByID(id);

  if (book === null) {
    res.status(400).json({
      code: 400,
      message: `Unable to find book with ID: ${id}`,
    });
    return;
  }

  res.status(200).json({ book });
});

module.exports = router;
