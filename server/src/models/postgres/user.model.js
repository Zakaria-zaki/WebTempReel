const { user } = require('./index');

const usersFixtures = [
    {
        'email'     : 'slimane321@gmail.com',
        'password'  : 'slachslach',
        'firstName' : 'slimane',
        'lastName'  : 'achbouq',
        'role'      : 'ROLE_ADMIN'
    },
    {
        'email'     : 'zaid@gmail.com',
        'password'  : 'zaidzaid',
        'firstName' : 'zaid',
        'lastName'  : 'ALAA HAZIM',
        'role'      : 'ROLE_USER'
    },
    {
        'email'     : 'zakaria@gmail.com',
        'password'  : 'zakariazakaria',
        'firstName' : 'zakaria',
        'lastName'  : 'ATTAOUI',
        'role'      : 'ROLE_USER'
    },
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
