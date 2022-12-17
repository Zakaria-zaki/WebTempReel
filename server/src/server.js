const http = require('http');
// const io = require('socket.io');

require('dotenv').config();

const app = require('./app');
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

io.on('connection', (socket) => {
    console.log(socket.id + ' user connected');

    socket.on('disconnect', () => {
        console.log(socket.id + ' user disconnected');
    });

    socket.on('joinSalon', (data) => {
        let clients = io.sockets.adapter.rooms.get(data.room)
        const numClients = clients ? clients.size : 0;
        if (numClients >= data.nbParticipants) {
            socket.emit('joinSalonRes', {res: false});
            console.log("ROOM " + data.room + " IS FULL. UNABLE TO JOIN");
        }
        else {
            socket.join(data.room);
            socket.emit('joinSalonRes', {res: true});
            console.log("ROOM REJOINTE : " + data.room)
        }
    });

    socket.on('leaveSalon', (data) => {
        socket.leave(data.room);
        console.log(socket.id + data.msg);
    });

    socket.on('messageSalon', async (data) => {
        let user = await verifyToken(data.token);
        let newMsg = "[" + user.id + "] : " + data.msg;
        io.to(data.room).emit('appendMessageSalon', {msg: newMsg, client: socket.id});
    });
});

const sockets = require('./services/sockets');
const {verifyToken} = require("./services/tokenManager");

async function startServer() {

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();