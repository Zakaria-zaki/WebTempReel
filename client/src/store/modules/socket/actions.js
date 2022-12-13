export default {
    async joinOrLeaveSalon(socket, userId, roomName, roomId) {
        let joinBtn = document.getElementById(roomId);
        if (joinBtn.innerHTML === "Join") {
            socket.emit("join", "esgi");
            joinBtn.innerHTML = "Leave";
        } else {
            socket.emit("leave", "esgi");
            joinBtn.innerHTML = "Join";
        }
    },

    async sendMessageToSalon(socket, userId, roomName, roomId, message) {
        socket.emit('chat', {msg: message, room: roomName});
    }
}