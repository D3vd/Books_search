const express = require('express');
const logger = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');

const Database = require('./controller/database');

const app = express();

// Middleware
app.use(logger('common'));

// Handlebar Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/search', (req, res) => {
  let search = req.query.search;
  res.render('search', { search });
});

// Set Static Folder
app.use(express.static(path.join(__dirname, './public')));

// Routes - API
app.use('/api', require('./routes/api'));

// Initialize MongoDB
db = new Database();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
