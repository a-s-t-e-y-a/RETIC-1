const express = require('express');

const app = express();
// including cors
const cors = require('cors');
// including body parser
const parse = require('body-parser');

// including cors {you can change it later}

app.use(
  cors({
    origin: '',
  }),
);
// including routes export

// adding middleware for the custom routes

// adding middleware
app.use(parse.json());
app.use(express.json());

// export the module

module.exports = app;
