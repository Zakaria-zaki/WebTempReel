const express = require('express');
const { httpSignin } = require('./security.controller');
const checkAuthentication = require("../../middlewares/checkAuthentication");

const securityRouter = express.Router();

securityRouter.post('/signin', httpSignin);

module.exports = securityRouter;
