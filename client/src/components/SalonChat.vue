<script>
import {httpGetOneSalon} from "@/hooks/requests";
import {ref} from "vue";

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
  },
  mounted() {
    this.getData()

    // this.$store.dispatch('joinOrLeaveSalon', { userId: 1, roomName: this.salon.title, salonId: this.salon.id });
    // store.sock.joinOrLeaveSalon(1, this.salon.title, this.salon.id);
  },
}

</script>

<template>
  <div>
    <h1>{{ this.salon.title }}</h1>
  </div>
</template>

<style scoped>

</style>