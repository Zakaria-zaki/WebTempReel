<template>
  <router-view v-slot="slotProps">
      <component :is="slotProps.Component"></component>
  </router-view>
</template>

<script>
import SalonButton from "@/components/SalonButton.vue";
import SocketioService from './services/socketio.service.js';

export default {
  created () {
    SocketioService.setupSocketConnection();
    this.$store.dispatch('tryLogin');
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  components: {
    'v-salon-button': SalonButton
  }
}
</script>