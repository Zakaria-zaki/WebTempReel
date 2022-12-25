const io = require('socket.io');
const jwt = require('jsonwebtoken');

function listen(io) {
    let connectedUsers = [];
    io.on('connection', (socket) => {
        socket.on('connected', (token) => {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (decoded) {
                socket.email = decoded.email;
                const userAlreadyConnected = connectedUsers.findIndex(user => user.email==decoded.email);

                if (userAlreadyConnected === -1) {
                    connectedUsers.push(decoded);
                }
            }
            socket.broadcast.emit('userConnected', connectedUsers);
            socket.emit('userConnected', connectedUsers);
        });

        socket.on('message', (message) => {
            console.log(`message from ${socket.id} : ${message}`);
            socket.broadcast.emit('messageCreated', message);
        });

        socket.on('getConnectedUsers', () => {
            socket.broadcast.emit('userConnected', connectedUsers);
            socket.emit('userConnected', connectedUsers);
        })

        socket.on('disconnect', () => {
            connectedUsers = connectedUsers.filter(function(user) {
                return user.email != socket.email;
            });
            console.log(`socket ${socket.email} disconnect`);
            socket.emit('userConnected', connectedUsers);
            socket.broadcast.emit('userConnected', connectedUsers);
        })
    });

};



module.exports = {
    listen,
}
