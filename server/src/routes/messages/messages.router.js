const express = require('express');
const checkAuthentication = require("../../middlewares/checkAuthentication");
const { httpCreateMessage, httpGetSalonMessage } = require('./messages.controller');

const messageRouter = express.Router();

messageRouter.post('/new', checkAuthentication, httpCreateMessage);
messageRouter.get('/salons/:id', checkAuthentication, httpGetSalonMessage);

module.exports = messageRouter;

