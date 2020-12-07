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
  res.json({api: 'api works'});
});

app.listen(port, () => {
  console.log(`server listening at port: ${port}`);
});