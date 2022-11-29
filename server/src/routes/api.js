const express = require('express');

const api = express.Router();

api.use('/', (req, res) => {
    return res.status(200).json({"message": "Welcome to our api !"});
});

module.exports = api;