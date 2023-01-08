const { verifyToken } = require("../services/tokenManager.js");
const express = require("express");
const app = express();

module.exports = async(req, res, next) => {
    const randomString = () => {
        var length = 10;
        var id = '';
        while (id.length < length) {
            var ch = Math.random()
                .toString(36)
                .substr(2, 1);
            if (Math.random() < 0.5) {
                ch = ch.toUpperCase();
            }
            id += ch;
        }
        return id;
    }

    const auth = req.headers.authorization;
    if (!auth) {
        return res.sendStatus(401);
    }
    const [type, token] = auth.split(" ");
    if (type !== "Bearer") {
        return res.sendStatus(401);
    }
    try {
        const decoded = await verifyToken(token);
        req.user = decoded;
        next();

        // Création d'une session


    } catch (error) {
        return res.sendStatus(401);
    }
};
