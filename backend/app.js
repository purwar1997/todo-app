require('dotenv').config({ path: '.env' });
require('./config/dbconnection').connect();
const express = require('express');
const router = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

module.exports = app;
