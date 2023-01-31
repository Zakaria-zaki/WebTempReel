const { createGroup, deleteGroup, updateGroup, getGroups, getGroupById, getOneGroup } = require('../../models/postgres/group.model');

async function httpCreateGroup(req, res) {
    const response = await createGroup({
        title: req.body.title,
        membersMax: req.body.membersMax
    })
    return res.status(200).json(response);
}

async function httpDeleteGroup(req, res) {
    const response = await deleteGroup(req.params.id);
    if (response == 1) {
        const groups = await getGroups();
        return res.status(200).json(groups);
    }
    return res.status(500).json({'message': 'Error occurred while trying to remove the given group'});
}

async function httpUpdateGroup(req, res) {
    const response = await updateGroup({
        title: req.body.title,
        membersMax: req.body.membersMax
    }, req.params.id);
    return res.status(200).json(response);
}

async function httpGetGroup(req, res) {
    const response = await getGroupById(req.params.id);
    return res.status(200).json(response);
}

async function httpGetGroups(req, res) {
    const response = await getGroups();
    return res.status(200).json(response);
}

async function httpGetOneGroup(req, res) {
    const response = await getOneGroup(req.params.id);
    return res.status(200).json(response);
}

module.exports = {
    httpCreateGroup,
    httpDeleteGroup,
    httpUpdateGroup,
    httpGetGroups,
    httpGetGroup,
    httpGetOneGroup
}