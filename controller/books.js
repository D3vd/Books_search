const Books = require('../models/books');

async function getAll() {
  let books = await Books.find({});
  return books;
}

module.exports = { getAll };
