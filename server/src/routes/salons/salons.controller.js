const {createSalon, getSalons, getOneSalon} = require('../../models/postgres/salon.model');

async function httpCreateSalon(req, res) {
    const response = await createSalon({
        title: req.body.title,
        description: req.body.description,
    })
    return res.status(200).json(response);
}

async function httpGetSalons(req, res) {
    const response = await getSalons();
    return res.status(200).json(response);
}

async function httpGetOneSalon(req, res) {
    const response = await getOneSalon(req.params.id);
    return res.status(200).json(response);
}

module.exports = {
    httpCreateSalon,
    httpGetSalons,
    httpGetOneSalon
}