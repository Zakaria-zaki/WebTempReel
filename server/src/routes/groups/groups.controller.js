const { createGroup, deleteGroup, updateGroup, getGroups } = require('../../models/postgres/group.model');

async function httpCreateGroup(req, res) {
    const response = await createGroup({
        title: req.body.title,
        membersMax: req.body.membersMax
    })
    return res.status(200).json(response);
}

async function httpDeleteGroup(req, res) {
    const response = await deleteGroup(req.params.id);
    return res.status(200).json(response);
}

async function httpUpdateGroup(req, res) {
    const response = await updateGroup({
        title: req.body.title,
        membersMax: req.body.membersMax
    }, req.params.id);
    return res.status(200).json(response);
}

async function httpGetGroups(req, res) {
    const response = await getGroups();
    return res.status(200).json(response);
}

module.exports = {
    httpCreateGroup,
    httpDeleteGroup,
    httpUpdateGroup,
    httpGetGroups
}