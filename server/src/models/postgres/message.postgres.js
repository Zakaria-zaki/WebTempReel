const { Model, DataTypes } = require("sequelize");
const connection = require("../../services/postgres");
class Message extends Model{}

Message.init({
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        salonId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        sequelize:connection,
        modelName: "message",
    }
);

module.exports = Message;