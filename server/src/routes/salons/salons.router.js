const express = require('express');
const checkAuthentication = require("../../middlewares/checkAuthentication");
const { httpCreateSalon, httpGetSalons, httpGetOneSalon} = require('./salons.controller');

const salonRouter = express.Router();

salonRouter.get('/', checkAuthentication, httpGetSalons);
salonRouter.get('/:id', checkAuthentication, httpGetOneSalon);
salonRouter.post('/create', checkAuthentication, httpCreateSalon);

module.exports = salonRouter;

