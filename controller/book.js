const axios = require('axios');
const parseString = require('xml2js').parseString;

async function getDetails(isbn) {
  let res = await axios
    .get(
      `https://www.goodreads.com/book/isbn/${isbn}?key=JKfZcTyK1lzaCpB58Tpr8g`
    )
    .then((res) => {
      let data = {};

      parseString(res.data, (err, result) => {
        data = result.GoodreadsResponse.book[0];
      });

      return {
        title: data.title[0],
        author: data.authors[0].author[0].name[0],
        image: data.image_url[0],
        year: data.publication_year[0],
        description: data.description[0],
        url: data.url[0],
      };
    });

  return res;
}

module.exports = { getDetails };
