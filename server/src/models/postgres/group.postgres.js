const { Model, DataTypes } = require("sequelize");
const connection = require("../../services/postgres");
class Group extends Model{}

Group.init({
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    membersMax: {
        type: DataTypes.INTEGER,
        allowNull: false
        }
    },
    {
        sequelize:connection,
        modelName: "group",
    }
);

module.exports = Group;