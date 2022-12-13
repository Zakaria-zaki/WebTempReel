const express = require('express');

const securityRouter = require('./security/security.router');
const salonRouter = require('./salons/salons.router');
const messagesRouter = require('./messages/messages.router');

const api = express.Router();

api.use('/', securityRouter);
api.use('/salons', salonRouter);
api.use('/messages', messagesRouter);

api.use('/', (req, res) => {
    return res.status(200).json({"message": "Welcome to our api !"});
});

module.exports = api;