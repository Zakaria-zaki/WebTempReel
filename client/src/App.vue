<template>
  <router-view v-slot="slotProps">
      <component :is="slotProps.Component"></component>
  </router-view>
</template>

<script>
import SalonButton from "@/components/SalonButton.vue";
export default {
  created () {
    this.$store.dispatch('tryLogin');
  },
  components: {
    'v-salon-button': SalonButton
  }
}
</script>