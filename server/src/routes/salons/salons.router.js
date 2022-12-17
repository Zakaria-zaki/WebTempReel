const express = require('express');
const checkAuthentication = require("../../middlewares/checkAuthentication");
const { httpCreateSalon, httpGetSalons, httpGetOneSalon, httpDeleteSalon, httpEditSalon} = require('./salons.controller');

const salonRouter = express.Router();

salonRouter.get('/', checkAuthentication, httpGetSalons);
salonRouter.get('/:id', checkAuthentication, httpGetOneSalon);
salonRouter.post('/create', checkAuthentication, httpCreateSalon);
salonRouter.delete('/delete/:id', checkAuthentication, httpDeleteSalon);
salonRouter.put('/edit/:id', checkAuthentication, httpEditSalon);

module.exports = salonRouter;

