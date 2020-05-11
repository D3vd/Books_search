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

// Set Static Folder
app.use(express.static(path.join(__dirname, './public')));

// Routes
app.use('/search', require('./routes/search'));
app.use('/book', require('./routes/book'));
app.use('/api', require('./routes/api'));

// Initialize MongoDB
db = new Database();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
