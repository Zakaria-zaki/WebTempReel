const express = require('express');
const checkAuthentication = require("../../middlewares/checkAuthentication");
const { httpCreateMessage } = require('./messages.controller');

const messageRouter = express.Router();

messageRouter.post('/messages', checkAuthentication, httpCreateMessage);

module.exports = messageRouter;