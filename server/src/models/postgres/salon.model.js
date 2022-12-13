// Add User to Salon
const {salon} = require('./index');

async function createSalon(data) {
    try {
        const newSalon = await salon.create(data);
        return salon;
    } catch (error) {
        console.log("Create Salon ERROR : " + error);
    }
}

async function getSalons() {
    try {
        const newSalon = await salon.findAll();
        return newSalon;
    } catch (error) {
        console.log("Get Salons ERROR : " + error);
    }
}

async function getOneSalon(salonId) {
    try {
        const newSalon = await salon.findOne({
            where: {
                id: salonId
            }
        });
        return newSalon;
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

module.exports = {
    getSalonUsers,
    getUserInSalon,
    createSalon,
    getSalons,
    getOneSalon
}