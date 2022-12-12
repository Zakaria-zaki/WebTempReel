const { createMessage } = require('../../models/postgres/message.model');

async function httpCreateMessage(req, res) {
    const response = await createMessage({
        sender: req.user.id,
        receiver: req.body.receiver,
        content: req.body.content
    })
    return res.status(200).json(response);
}

module.exports = {
    httpCreateMessage
}