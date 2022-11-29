const http = require('http');
const io = require('socket.io');

const app = require('./app');
const PORT = 8000;

const server = http.createServer(app);
const socketServer = io(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

const sockets = require('./services/sockets');

async function startServer() {
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();