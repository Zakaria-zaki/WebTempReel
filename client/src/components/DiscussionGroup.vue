<template>
  <div class="flex flex-col flex-grow h-0 p-4 overflow-auto messages-dashboard">
    <div v-for="message in messages">
      <Message
          v-bind:key="message.id"
          :fullName="connectedUserFullName"
          :message="message.content"
          :date="parseDate(message.createdAt)"
          :rightMessage="message.sender === connectedUserId"
      />
    </div>
  </div>
  <!-- <footer class="bg-gray-200 text-center lg:text-left">
<div class="text-gray-700 text-center p-4" style="background-color: rgba(0, 0, 0, 0.2);">

      <button
      type="button"
      class="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
    >
      Request discussion
    </button>
</div>
</footer> -->
  <form @submit.prevent="submitForm">
    <div class="bg-gray-300 p-4">
      <input
          class="flex items-center h-10 w-full rounded px-3 text-sm"
          type="text"
          placeholder="Type your message…"
          v-model.trim="message"
      >
    </div>
  </form>
</template>

<script>
import Message from '@/components/Message.vue';

export default {
  components: {
    Message
  },
  data() {
    return {
      messages: [],
      message: null,
      isLoading: false,
      messageDashboard: "messages-dashboard"
    }
  },
  computed: {
    connectedUserFullName() {
      return this.$store.getters['auth/fullName']
    },
  },
  sockets: {
    messageGroupCreated: function (data) {
      if (data.roomId === parseInt(this.$route.params.id)) {
        this.messages.push(data.message);
      }
    }
  },
  methods: {
    parseDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('default') + " " + date.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
      });
    },
    async submitForm() {
      this.error = null;
      if (this.message === '') {
        return;
      }

      this.isLoading = true;

      const actionPayload = {
        sender: this.$store.state.auth.id,
        content: this.message,
        salonId: this.$route.params.id,
      };

      try {
        const jwt = this.$store.state.auth.token;
        const response = await fetch(`http://localhost:8000/v1/messages`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
          },
          body: JSON.stringify(actionPayload)
        });

        const currentRoom = await fetch(`http://localhost:8000/v1/groups/chat/${this.$route.params.id}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
          },
        });
        let room = await currentRoom.json();

        if (response.ok) {
          const data = {
            message: {
              "content": this.message,
              "sender": this.$store.state.auth.id,
              "createdAt": Date.now(),
              "salonId": this.$route.params.id,
            },
            // room: room.title
            room: room.title,
            roomId: room.id,
          };

          this.$socket.emit('messageGroup', data);
          this.messages.push(data.message);
          this.scrollToElement();
        }
      } catch (err) {
        console.log(err);
        this.error = err || 'Failed to authenticated, try later.';
      }
      this.isLoading = false;
      this.message = '';
    },
    scrollToTheEndOfMessagesDashboard() {
      const messagesDashboard = document.getElementsByClassName('messages-dashboard')[0];
      if (messagesDashboard) {
        messagesDashboard.scrollTop = messagesDashboard.scrollHeight;
      }
    }
  },
  mounted: async function () {
    console.log(this.$route);
    this.connectedUserId = this.$store.state.auth.id;
    const jwt = this.$store.state.auth.token;
    const response = await fetch(`http://localhost:8000/v1/groups/group-messages/${this.$route.params.id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      this.messages = data;
      console.log(this.messages)
      console.log(this.$store.state.auth.id)
    }

    this.scrollToTheEndOfMessagesDashboard();
  }
}
</script>