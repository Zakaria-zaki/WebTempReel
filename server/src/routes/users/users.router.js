const express = require('express');

const {
    httpGetMessages,
    httpGetUserInfo
} = require('./users.controller');

const checkAuthentication = require('../../middlewares/checkAuthentication');

const userRouter = express.Router();

userRouter.get('/user-messages/:friend', checkAuthentication, httpGetMessages);
userRouter.get('/user-info/:userId', checkAuthentication, httpGetUserInfo);

module.exports = userRouter;
