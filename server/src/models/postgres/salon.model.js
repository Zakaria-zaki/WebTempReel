// Add User to Salon
const {salon} = require('./index');

async function createSalon(data) {
    try {
        return await salon.create(data);
    } catch (error) {
        console.log("Create Salon ERROR : " + error);
    }
}

async function getSalons() {
    try {
        return await salon.findAll();
    } catch (error) {
        console.log("Get Salons ERROR : " + error);
    }
}

async function getOneSalon(salonId) {
    try {
        return await salon.findOne({
            where: {
                id: salonId
            }
        });
    } catch (error) {
        console.log("Get Salon ID " + salonId + " ERROR : " + error);
    }
}

async function getSalonUsers(salonId) {
    try {
        const newSalon = await salon.findOne({
            where: {
                id: salonId
            }
        });
        return newSalon.users;
    } catch (error) {
        console.log("Get Salon ID " + salonId + " Users ERROR : " + error);
    }
}

async function getUserInSalon(salonId, userId) {
    try {
        const newSalon = await salon.findOne({
            where: {
                id: salonId
            }
        });
        return newSalon.users.filter((id) => id === userId);
    } catch (error) {
        console.log("Get Salon ID " + salonId + " User ID " + userId + " ERROR : " + error);
    }
}

async function deleteSalon(salonId) {
    try {
        return await salon.destroy({
            where: {
                id: salonId
            }
        });
    } catch (error) {
        console.log("Delete Salon ID " + salonId + " ERROR : " + error);
    }
}

async function editSalon(salonId, title, nbParticipants) {
    try {
        return await salon.update({
            title: title,
            nbParticipants: nbParticipants
        }, {
            where: {
                id: salonId
            }
        });
    } catch (error) {
        console.log("Edit Salon ID " + salonId + " Title ERROR : " + error);
    }
}

module.exports = {
    getSalonUsers,
    getUserInSalon,
    createSalon,
    getSalons,
    getOneSalon,
    deleteSalon,
    editSalon
}