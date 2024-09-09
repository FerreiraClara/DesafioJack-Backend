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
app.use(cors({
    origin: 'https://taskly.app.br',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
  }));
  
app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://taskly.app.br');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
  });

app.use('/', router);

module.exports = app;