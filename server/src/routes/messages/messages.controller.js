const { createMessage, getSalonMessages} = require('../../models/postgres/message.model');

async function httpCreateMessage(req, res) {
    const response = await createMessage({
        userId: req.user.id,
        salonId: req.body.salonId,
        content: req.body.content
    })
    return res.status(200).json(response);
}
async function httpGetSalonMessage(req, res) {
    const response = await getSalonMessages(req.params.id);
    return res.status(200).json(response);
}

module.exports = {
    httpCreateMessage,
    httpGetSalonMessage,
}