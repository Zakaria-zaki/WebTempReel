const express = require('express');

const securityRouter = require('./security/security.router');

const api = express.Router();

api.use('/', securityRouter);

api.use('/', (req, res) => {
    return res.status(200).json({"message": "Welcome to our api !"});
});

module.exports = api;