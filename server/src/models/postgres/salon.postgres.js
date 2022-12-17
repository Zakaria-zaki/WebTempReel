const {Model, DataTypes} = require("sequelize");
const connection = require("../../services/postgres");

class Salon extends Model {
}

Salon.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nbParticipants: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        modelName: "salon",
    }
)

module.exports = Salon;

