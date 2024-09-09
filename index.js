const express = require('express');
const router = require('./routes/router');
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.jwt = require("jsonwebtoken");

mongoose.connect(process.env.MONGO_URL);

app.use(express.json());
app.options("*", cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));

app.use('/', router);

module.exports = app;