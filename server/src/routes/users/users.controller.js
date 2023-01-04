const { getMessages, getUserInfo } = require('../../models/postgres/user.model');
const {verifyToken} = require("../../services/tokenManager");
const {ValidationError} = require("sequelize");

async function httpGetMessages(req, res) {
    const messages = await getMessages(req.user.id, req.params.friend);
    return res.status(200).json(messages);
}

async function httpGetUserInfo(req, res) {
    const user = await getUserInfo(req.params.userId);
    return res.status(200).json(user);
}

module.exports = {
    httpGetMessages,
    httpGetUserInfo
}