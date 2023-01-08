const express = require('express');
const checkAuthentication = require("../../middlewares/checkAuthentication");
const { httpCreateGroup, httpDeleteGroup, httpUpdateGroup, httpGetGroups, httpGetOneGroup} = require('./groups.controller');

const groupRouter = express.Router();

groupRouter.post('/', checkAuthentication, httpCreateGroup);
groupRouter.delete('/:id', checkAuthentication, httpDeleteGroup);
groupRouter.put('/:id', checkAuthentication, httpUpdateGroup);
groupRouter.get('/', checkAuthentication, httpGetGroups);
groupRouter.get('/chat/:id', checkAuthentication, httpGetOneGroup);

module.exports = groupRouter;