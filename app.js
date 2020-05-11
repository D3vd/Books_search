const express = require('express');
const logger = require('morgan');

const Database = require('./controller/database');

const app = express();

// Middleware
app.use(logger('common'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Routes - API
app.use('/api', require('./routes/api'));

// Initialize MongoDB
db = new Database();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
