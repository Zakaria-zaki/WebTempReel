const { message } = require('./index');

async function createMessage(data) {
    return await message.create(data);
}

module.exports = {
    createMessage
};
