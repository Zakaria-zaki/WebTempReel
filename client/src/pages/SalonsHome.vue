<script>
import {httpDeleteSalon, httpEditSalon, httpGetSalons} from "@/hooks/requests";
import SalonButton from "@/components/SalonButton.vue";
import {ref} from "vue";
import router from "../router/router";

window.onclick = function (e) {
  if (location.href === "http://localhost:3000/salons") {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      if (e.target.className === "originalTitle" + inputs[i].name) {
        e.target.style.display = "none";
      } else {
        const outsideClick = !inputs[i].contains(e.target);
        if (outsideClick) {
          let originalTitle = document.getElementsByClassName("originalTitle" + inputs[i].name);
          let newTitle = inputs[i].value;
          inputs[i].remove();
          if (originalTitle.length > 0) {
            originalTitle[0].style.display = "block";
            httpEditSalon(originalTitle[0].id, newTitle);
          }
        }
      }
    }
  }
}

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
    handleClick: function (id) {
      router.push("/salons/" + id);
    },
    deleteSalon: function (id) {
      httpDeleteSalon(id);
    },
    editTitle: async (e) => {
      let salonId = e.target.id;
      let originalTitle = e.target;
      let salonTitleSection = document.getElementById("salon__title__" + salonId);
      let salonTitleInput = document.createElement("input");
      salonTitleInput.type = "text";
      salonTitleInput.id = "salonTitleInput" + salonId;
      salonTitleInput.name = salonId;
      salonTitleInput.value = e.target.innerText;
      originalTitle.style.display = "none";
      salonTitleSection.append(salonTitleInput);
    },
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
  },

  async beforeUpdate() {
    this.salons = await httpGetSalons();
  }
}
</script>

<template>
  <h1>Salons de discussion</h1>
  <div>
    <router-link :to="'/salons/create'" class="salon-button">
      <button>Create</button>
    </router-link>
  </div>
  <div class="salons">
    <div class="salon" v-for="salon in this.salons" :key="salon.id">
      <div class="salon__header">
        <h2 class="salon__title" :id="'salon__title__' + salon.id">
          <span :class="'originalTitle' + salon.id" :id="salon.id" @click="editTitle">{{ salon.title }}</span>
        </h2>
        <p class="salon__description">{{ salon.description }}</p>
      </div>
      <div class="salon__footer">
        <SalonButton v-bind="salon" @click="handleClick(salon.id)">Join</SalonButton>
        <button @click="deleteSalon(salon.id)">Delete</button>
      </div>
    </div>
  </div>
</template>