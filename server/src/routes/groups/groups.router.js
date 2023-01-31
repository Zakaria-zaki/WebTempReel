const express = require('express');
const checkAuthentication = require("../../middlewares/checkAuthentication");
const { httpCreateGroup, httpDeleteGroup, httpUpdateGroup, httpGetGroups, httpGetOneGroup, httpGetGroup} = require('./groups.controller');

const groupRouter = express.Router();

groupRouter.post('/', checkAuthentication, httpCreateGroup);
groupRouter.delete('/:id', checkAuthentication, httpDeleteGroup);
groupRouter.put('/:id', checkAuthentication, httpUpdateGroup);
groupRouter.get('/', checkAuthentication, httpGetGroups);
groupRouter.get('/chat/:id', checkAuthentication, httpGetOneGroup);
groupRouter.get('/:id', checkAuthentication, httpGetGroup);

module.exports = groupRouter;