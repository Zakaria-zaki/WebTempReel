<script>
import {httpGetOneSalon} from "@/hooks/requests";
import SocketioService from "@/services/socketio.service";

export default {
  name: "SalonChat",
  data() {
    let salon = {}
    return {
      salon: salon
    }
  },
  methods: {
    async getData() {
      let splits = window.location.href.split("/", 5);
      let salonId = splits.at(-1);
      this.salon = await httpGetOneSalon(salonId);
    },
    async newMessage() {
      await this.getData()
      let message = document.getElementById("newSalonMsg");
      SocketioService.sendMessage(message.value, this.salon.title);
      message.value = "";
    }
  },
  async created() {
    await this.getData()
    SocketioService.joinSalon(this.salon.title);
  },
  beforeUnmount() {
    SocketioService.leaveSalon(this.salon.title);
  },
  mounted() {
    this.getData()
    SocketioService.getMessageAndAppend(document.getElementById("messagesSection"))
  },
}

</script>

<template>
  <div>
    <h1>{{ this.salon.title }}</h1>
    <p>{{ this.salon.description }}</p>
    <div id="messagesSection">
      <!--      <div id="messages">
              <div v-for="message in this.salon.messages" :key="message.id">
                <p>{{ message.content }}</p>
              </div>
            </div>-->
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