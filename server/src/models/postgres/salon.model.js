// Add User to Salon
import User from "./user.postgres";
import Salon from "./salon.postgres";

async function addUserToSalon(salonId, userId) {
    try {
        const salon = await Salon.findOne({
            where: {
                id: salonId
            }
        });
        const user = await User
            .findOne({
                where: {
                    id: userId
                }
            });
        salon.users.push(user.id);
        await salon.save();
        return salon;
    } catch (error) {
        console.log("User joining Salon ID " + salonId + " ERROR : " + error);
    }
}

async function removeUserFromSalon(salonId, userId) {
    try {
        const salon = await Salon.findOne({
            where: {
                id: salonId
            }
        });
        const user = await User
            .findOne({
                where: {
                    id: userId
                }
            });
        salon.users = salon.users.filter((id) => id !== user.id);
        await salon.save();
        return salon;
    } catch (error) {
        console.log("User leaving Salon ID " + salonId + " ERROR : " + error);
    }
}

async function getSalonUsers(salonId) {
    try {
        const salon = await Salon.findOne({
            where: {
                id: salonId
            }
        });
        return salon.users;
    } catch (error) {
        console.log("Get Salon ID " + salonId + " Users ERROR : " + error);
    }
}

async function getUserInSalon(salonId, userId) {
    try {
        const salon = await Salon.findOne({
            where: {
                id: salonId
            }
        });
        return salon.users.filter((id) => id === userId);
    } catch (error) {
        console.log("Get Salon ID " + salonId + " User ID " + userId + " ERROR : " + error);
    }
}

module.exports = {
    addUserToSalon,
    removeUserFromSalon,
    getSalonUsers,
    getUserInSalon
}