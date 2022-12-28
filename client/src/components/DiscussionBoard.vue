<template>
        <div class="flex flex-col flex-grow h-0 p-4 overflow-auto messages-dashboard">
			<div v-for="message in messages">
				<Message
					v-bind:key="message.id"
					:fullName="message.sender === connectedUserId ? connectedUserFullName : clientFullName"
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
			clientData: null,
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
		clientFullName() {
			return this.clientData ? this.clientData.firstName + ' ' + this.clientData.lastName : '';
		}
	},
	sockets: {
		messageCreated: function (message) {
			console.log(message);
			if (message.sender === parseInt(this.$route.params.receiverId) && message.receiver === this.$store.state.auth.id) {
				this.messages.push(message);
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
				receiver: this.$route.params.receiverId,
				content: this.message
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
				if (response.ok) {
					const messageSent = {
						"content": this.message,
						"sender": this.$store.state.auth.id,
						"createdAt": Date.now(),
						"receiver": parseInt(this.$route.params.receiverId)
					};
					this.$socket.emit('privateMessage', messageSent);
					this.messages.push(messageSent);
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
		this.clientId = this.$route.params.receiverId;
		this.connectedUserId = this.$store.state.auth.id;
		const jwt = this.$store.state.auth.token;
		const response = await fetch(`http://localhost:8000/v1/user-messages/${this.$route.params.receiverId}`, {
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

		// Get client infos
		const response2 = await fetch(`http://localhost:8000/v1/user-info/${this.$route.params.receiverId}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        });
		if (response2.ok) {
			const clientData = await response2.json();
			this.clientData = clientData.user;
		}
		this.scrollToTheEndOfMessagesDashboard();
  }
}
</script>