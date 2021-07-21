const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const {
    routes: userRoutes,
} = require('./user/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRoutes);

module.exports = app;