import {io} from "socket.io-client";
import {httpCreateSalonMessage} from "@/hooks/requests";
import router from "@/router/router";

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

    joinSalon(salonName, nbParticipants) {
        this.socket.emit('joinSalon', {msg: " a rejoint le salon ", room: salonName, nbParticipants: nbParticipants});
        this.socket.on('joinSalonRes', (data) => {
            if (data.res === false) {
                router.push("/salons")
            }
        });
    }

    leaveSalon(salonName) {
        this.socket.emit('leaveSalon', {msg: " a quitté le salon ", room: salonName});
    }

    async sendMessage(message, salonName, salonId) {
        let token = localStorage.getItem('esgi-ws-token');
        this.socket.emit('messageSalon', {token: token, msg: message, room: salonName});
        await httpCreateSalonMessage({content: message, salonId: salonId});
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