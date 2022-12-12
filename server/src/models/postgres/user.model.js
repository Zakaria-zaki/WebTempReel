const {user, message} = require('./index');
const sequelize = require('../../services/postgres');
const {QueryTypes} = require('sequelize');


const usersFixtures = [
    {
        'email': 'slimane321@gmail.com',
        'password': 'slachslach',
        'firstName': 'slimane',
        'lastName': 'achbouq',
        'role': 'ROLE_ADMIN'
    }
];

async function loadUsersData() {
    try {
        usersFixtures.forEach(async (user) => await saveUser(user));
    } catch (error) {
        console.error(error);
    }
}

async function saveUser(data) {
    return await user.create(
        data
    );
}

async function getConversations(userId) {
    const senders = await sequelize.query("SELECT DISTINCT sender FROM messages WHERE receiver = ?",
        {
            model: message,
            replacements: [userId],
            type: QueryTypes.SELECT
        });
    const sendersId = senders.map(obj => obj.sender);

    const receivers = await sequelize.query("SELECT DISTINCT receiver FROM messages WHERE sender = ?",
        {
            model: message,
            replacements: [userId],
            type: QueryTypes.SELECT
        });
    const receiversId = receivers.map(obj => obj.receiver);
    const friends = sendersId.concat(receiversId.filter((element) => sendersId.indexOf(element) < 0));

    return await user.findAll({
        where: {
            id: friends,
        },
        order: [
            [{model: message, as: 'messageSender'}, 'createdAt', 'DESC'],
            [{model: message, as: 'messageSender'}, 'createdAt', 'DESC']
        ],
        include: [
            {
                model: message,
                as: 'messageSender',
            },
            {
                model: message,
                as: 'messageReceiver',
            }
        ]
    });
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


module.exports = {
    loadUsersData
}
