<script>
import {httpGetSalons} from "@/hooks/requests";
import SalonButton from "@/components/SalonButton.vue";
import {ref} from "vue";

export default {
  components: {
    SalonButton
  },
  data() {
    return {
      salons: []
    }
  },
  methods: {
    async getData() {
      this.salons = httpGetSalons();
    },
    handleClick: function () {

    }
  },
  mounted() {
    this.getData()
  },
  setup() {
    const salons = ref([]);
    const getData = async () => {
      salons.value = await httpGetSalons();
    }
    getData();
    return {
      salons
    }
  }
}
</script>

<template>
  <h1>Salons de discussion</h1>
  <div class="salons">
    <div class="salon" v-for="salon in this.salons" :key="salon.id">
      <div class="salon__header">
        <h2 class="salon__title">{{ salon.id }} - {{ salon.title }}</h2>
        <p class="salon__description">{{ salon.description }}</p>
      </div>
      <div class="salon__footer">
        <router-link :to="'/salons/' + salon.id" class="salon-button">
          <SalonButton v-bind="salon" :onClick="handleClick">Join</SalonButton>
        </router-link>
      </div>
    </div>
  </div>
</template>