const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require("helmet");
const express = require('express');
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, './client/dist/client');
require('dotenv').config();
const app = express();
require('./db');

// Middleware code
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

const port = process.env.API_PORT || 3000;

app.get('/api', (req, res) => {
  res.send('api works');
});

// If running prod
if (process.env.PRODUCTION) {

  console.log('Serving angular app at ' + PUBLIC_DIR);
  app.use(express.static(PUBLIC_DIR));

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(PUBLIC_DIR, 'index.html'));
    res.end();
  });
}

app.listen(port, () => {
  console.log(`server listening at port: ${port}`);
});