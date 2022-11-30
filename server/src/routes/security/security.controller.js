require('dotenv').config();
const User = require("../../models/postgres/user.postgres");
const {createToken} = require("../../services/tokenManager");
const {formatError} = require('../../services/helpers');
const {ValidationError} = require("sequelize");
const bcryptjs = require("bcryptjs");


async function httpSignin(req, res) {
    try {
        const result = await User.findOne({where: {email: req.body.email}});
        if (
            result && bcryptjs.compareSync(req.body.password, result.password)
        ) {
            const newToken = await createToken(result);
            res.json({
                token: newToken,
                message: 'OK'
            });
        } else {
            res.status(401).json({
                'message': 'Email or password is incorrect !'
            });
        }
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error(error.message);
            res.status(422).json({
                'message': error.message
            });
        } else {
            console.error(error.message);
            res.status(500).json({'message': error.message});
        }
    }
};

module.exports = {
    httpSignin
};