import {createApp} from 'vue'
import App from "./App.vue";
import router from "./router/router.js";
import store from "@/store/index.js";
import SalonButton from "@/components/SalonButton.vue";
import SalonChat from "@/components/SalonChat.vue";

const app = createApp(App)

app.use(router)

app.use(store);

app.mount("#app");

export default {
    SalonButton,
    SalonChat
}