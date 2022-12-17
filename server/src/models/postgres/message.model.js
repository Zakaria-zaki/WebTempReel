const {message} = require('./index');

async function createMessage(data) {
    return await message.create(data);
}

async function getSalonMessages(salonId) {
    try {
        return await message.findAll({
            where: {
                salonId: salonId
            }
        });
    } catch (error) {
        console.log("Get Salon messages for Salon " + salonId + " ERROR : " + error);
    }
}

module.exports = {
    createMessage,
    getSalonMessages
};