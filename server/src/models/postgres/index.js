exports.connection = require("../../services/postgres");
exports.user  = require("./user.postgres");
exports.message = require('./message.postgres');

exports.user.hasMany(exports.message, {
    as : 'messageSender',
    foreignKey: 'sender'
});
exports.message.belongsTo(exports.user, { as: 'senderId', foreignKey: 'sender' });
exports.user.hasMany(exports.message, {
    as : 'messageReceiver',
    foreignKey: 'receiver'
});
exports.message.belongsTo(exports.user, { as: 'receiverId', foreignKey: 'receiver' });

