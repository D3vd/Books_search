const mongoose = require('mongoose');

let bookJSON = {
  id: String,
  name: String,
  author: String,
  year: Number,
};

let bookSchema = new mongoose.Schema(bookJSON, {
  timestamps: false,
});

module.exports = mongoose.model('Books', bookSchema);
