const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require("helmet");
const express = require('express');
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, './client/dist/client');
require('dotenv').config();
const app = express();
require('./db');
const emailRouter = require('./routes/email');

// Middleware code
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/email', emailRouter);

const port = process.env.API_PORT || 3000;

app.get('/api', (req, res) => {
  res.json({api: 'api works'});
});
function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
}

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: 'Something failed!' });
});

app.listen(port, () => {
  console.log(`server listening at port: ${port}`);
});