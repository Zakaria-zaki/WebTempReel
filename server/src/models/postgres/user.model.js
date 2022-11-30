const { user } = require('./index');

const usersFixtures = [
    {
        'email'     : 'slimane321@gmail.com',
        'password'  : 'slachslach',
        'firstName' : 'slimane',
        'lastName'  : 'achbouq',
        'role'      : 'ROLE_ADMIN'
    }
];

async function loadUsersData() {
    try {
        usersFixtures.forEach(async (user) => await saveUser(user));
    } catch(error) {
        console.error(error);
    }   
}

async function saveUser(data) {
    return await user.create(
        data
    );
}

module.exports = {
    loadUsersData
}
