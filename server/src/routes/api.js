const express = require('express');

const securityRouter = require('./security/security.router');
const messagesRouter = require('./messages/messages.router');
const usersRouter = require('./users/users.router');
const groupsRouter = require('./groups/groups.router');

const api = express.Router();

api.use('/', securityRouter);
api.use('/', messagesRouter);
api.use('/', usersRouter);
api.use('/groups', groupsRouter);

api.use('/', (req, res) => {
    return res.status(200).json({"message": "Welcome to our api !"});
});

module.exports = api;