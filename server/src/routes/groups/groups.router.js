const express = require('express');
const checkAuthentication = require("../../middlewares/checkAuthentication");
const { httpCreateGroup, httpDeleteGroup, httpUpdateGroup, httpGetGroups } = require('./groups.controller');

const messageRouter = express.Router();

messageRouter.post('/', checkAuthentication, httpCreateGroup);
messageRouter.delete('/:id', checkAuthentication, httpDeleteGroup);
messageRouter.put('/:id', checkAuthentication, httpUpdateGroup);
messageRouter.get('/', checkAuthentication, httpGetGroups);

module.exports = messageRouter;