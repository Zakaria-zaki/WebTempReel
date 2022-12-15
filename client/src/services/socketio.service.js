import {io} from "socket.io-client";

class SocketioService {
    socket;
    messageToAppend;

    constructor() {
    }

    setupSocketConnection(roomName = "") {
        this.socket = io("http://localhost:8000");
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }

    joinSalon(salonName) {
        this.socket.emit('joinSalon', {msg: " a rejoint le salon ", room: salonName});
    }

    leaveSalon(salonName) {
        this.socket.emit('leaveSalon', {msg: " a quitté le salon ", room: salonName});
    }

    sendMessage(message, salonName) {
        this.socket.emit('messageSalon', {msg: message, room: salonName});
    }

    getMessageAndAppend(messageSection) {
        this.socket.on('appendMessageSalon', (data) => {
            let msgZone = document.createElement("p");
            msgZone.innerHTML = data.msg;
            messageSection.append(msgZone);
        });
    }
}

export default new SocketioService();