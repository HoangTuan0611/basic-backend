const express = require('express');
const cors = require('cors');
const routes = require('./models/routes');

const app = express();

app.use(cors());
app.use(express.json());

// route define
app.use('/api', routes);

module.exports = app;
