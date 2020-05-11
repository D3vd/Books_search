const Books = require('../models/books');

async function getByID(id) {
  let book = await Books.findOne({ id });
  return book;
}

async function getAll() {
  let books = await Books.find({});
  return books;
}

module.exports = { getAll, getByID };
