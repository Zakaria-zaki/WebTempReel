const { group } = require('./index');

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

module.exports = {
    createGroup,
    deleteGroup,
    updateGroup,
    getGroups,
    getGroupById
};