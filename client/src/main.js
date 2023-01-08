import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from '@/store/index.js';
import VueSocketIO from 'vue-3-socket.io'
import SocketIO from 'socket.io-client'
import '@/index.css'

const app = createApp(App)

app.use(router)

app.use(store);

app.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:8000'),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  }))

app.mount('#app')
