<script>
import {httpGetOneSalon, httpGetSalonMessage} from "@/hooks/requests";
import SocketioService from "@/services/socketio.service";

export default {
  name: "SalonChat",
  data() {
    let salon = {}
    let messages = []
    return {
      salon: salon,
      messages: messages,
    }
  },
  methods: {
    async getData() {
      let splits = window.location.href.split("/", 5);
      let salonId = splits.at(-1);
      this.salon = await httpGetOneSalon(salonId);
    },

    async getMessages() {
      let splits = window.location.href.split("/", 5);
      let salonId = splits.at(-1);
      const response = await httpGetSalonMessage(salonId);
      this.messages = response;
    },
    async newMessage() {
      await this.getData();
      let message = document.getElementById("newSalonMsg");
      let messageContent = message.value.trim();
      if (messageContent !== "") {
        await SocketioService.sendMessage(messageContent, this.salon.title, this.salon.id);
      }

      message.value = "";
      document.getElementById('messages').scrollTo(0, document.getElementById('messages').scrollHeight);
    }
  }
  ,
  async created() {
    await this.getData();
    await this.getMessages();
    SocketioService.joinSalon(this.salon.title, this.salon.nbParticipants);
    document.getElementById('messages').scrollTo(0, document.getElementById('messages').scrollHeight);
  }
  ,
  beforeUnmount() {
    SocketioService.leaveSalon(this.salon.title);
    document.getElementById('messages').scrollTo(0, document.getElementById('messages').scrollHeight);
  }
  ,
  async mounted() {
    await this.getData();
    SocketioService.getMessageAndAppend(document.getElementById("messages"));
    document.getElementById('messages').scrollTo(0, document.getElementById('messages').scrollHeight);
  }
  ,
}

</script>

<template>
  <div>
    <h1>{{ this.salon.title }}</h1>
    <p>{{ this.salon.description }}</p>
    <div id="messagesSection">
      <div id="messages" style="max-height: calc(100vh - 400px); overflow: auto;">
        <div v-for="message in this.messages" :key="message.id">
          <p>[{{ message.userId }}] : {{ message.content }}</p>
        </div>
      </div>
    </div>
    <div style="margin-top: 100px">
      <input type="text" id="newSalonMsg" placeholder="Nouveau message">
      <button id="sendSalonMsg" @click="newMessage">Envoyer</button>
    </div>
    <hr>
    <router-link :to="'/salons'" class="salon-button">
      <button>Leave</button>
    </router-link>
  </div>
</template>

<style scoped>

</style>