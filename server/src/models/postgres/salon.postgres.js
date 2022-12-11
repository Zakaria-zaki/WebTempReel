const {Model, DataTypes} = require("sequelize");
const connection = require("../../services/postgres");

class Salon extends Model {
}

Salon.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        users: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },
    },
)

module.exports = Salon;

