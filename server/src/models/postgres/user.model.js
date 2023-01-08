const { user, message } = require('./index');
const sequelize = require('../../services/postgres');
const {QueryTypes} = require('sequelize');
const userDatabase = require("./user.postgres");

const usersFixtures = [
    {
        'email'     : 'slimane321@gmail.com',
        'password'  : 'slachslach',
        'firstName' : 'slimane',
        'lastName'  : 'achbouq',
        'role'      : 'ROLE_ADMIN'
    },
    {
        'email'     : 'zaid@gmail.com',
        'password'  : 'zaidzaid',
        'firstName' : 'zaid',
        'lastName'  : 'ALAA HAZIM',
        'role'      : 'ROLE_USER'
    },
    {
        'email'     : 'zakaria@gmail.com',
        'password'  : 'zakariazakaria',
        'firstName' : 'zakaria',
        'lastName'  : 'ATTAOUI',
        'role'      : 'ROLE_USER'
    },
];

async function loadUsersData() {
    try {
        usersFixtures.forEach(async (user) => await saveUser(user));
    } catch(error) {
        console.error(error);
    }   
}

async function saveUser(data) {
    return await user.create(
        data
    );
}

async function getMessages(userId, friendId) {
    const messages = await sequelize.query(
        "SELECT * FROM messages WHERE (receiver = " + userId + " AND sender = " + friendId + " ) OR (receiver = " + friendId + " AND sender = " + userId + ")",
        {
            model: message,
            type: QueryTypes.SELECT
        });

    return messages;
}

async function getUserInfo(id) {
    const data = {
        "user": await userDatabase.findOne({
            where: {
                id: id
            }
        }),
    }
    return data;
}


module.exports = {
    loadUsersData,
    getMessages,
    getUserInfo
}
