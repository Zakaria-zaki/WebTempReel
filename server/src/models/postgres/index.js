exports.connection = require("../../services/postgres");
exports.user = require("./user.postgres");
exports.message = require("./message.postgres");
exports.salon = require("./salon.postgres");

exports.user.hasMany(exports.message, {as: 'messageSender', foreignKey: "userId"});
exports.message.belongsTo(exports.user, {as: 'senderId', foreignKey: "userId"});

exports.user.hasMany(exports.message, {
    as: 'messageReceiver',
    foreignKey: 'userId'
});
exports.message.belongsTo(exports.user, {as: 'receiverId', foreignKey: 'userId'});
