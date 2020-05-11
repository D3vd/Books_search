const express = require('express');
const router = express.Router();

const Books = require('../controller/books');

router.get('/', (_, res) => {
  res.status(404).send('Invalid Route. Please check your request');
});

router.get('/all', async (_, res) => {
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

module.exports = router;
