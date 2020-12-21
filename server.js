const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require("helmet");
const express = require('express');
const path = require('path');
const passport = require('passport');
require('dotenv').config();
require('./auth/auth');
const app = express();
require('./db');

// Middleware code
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const plaidRouter = require('./routes/plaid');

// Other routes
app.use('/api/auth', authRouter);
app.use('/api/user', passport.authenticate('jwt', {session: false}), userRouter);
app.use('/api/finance', passport.authenticate('jwt', {session: false}), plaidRouter);

const port = process.env.API_PORT || 3000;

app.get('/api', (req, res) => {
  res.json({api: 'api works'});
});

app.listen(port, () => {
  console.log(`server listening at port: ${port}`);
});