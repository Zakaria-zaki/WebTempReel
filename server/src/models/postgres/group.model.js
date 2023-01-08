const { group, message} = require('./index');
const sequelize = require("../../services/postgres");
const {QueryTypes} = require("sequelize");

async function createGroup(data) {
    return await group.create(data);
}

async function deleteGroup(groupId) {
    return await group.destroy({ where: { id: groupId } });
}

async function updateGroup(data, groupId) {
    return await group.update(
        data,
        {
            where: { id: groupId }
        }
    )
}

async function getGroups() {
    return await group.findAll();
}

async function getGroupById(groupId) {
    return await group.findByPk(groupId)
}

async function getOneGroup(groupId) {
    return await group.findByPk(groupId);
}

async function getGroupMessages(salonId) {
    return await message.findAll({
        where: {
            salonId: salonId
        }
    });
}

module.exports = {
    createGroup,
    deleteGroup,
    updateGroup,
    getGroups,
    getOneGroup,
    getGroupById,
    getGroupMessages
};