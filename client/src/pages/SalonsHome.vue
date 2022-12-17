<script setup>
import {httpDeleteSalon, httpEditSalon, httpGetSalons} from "@/hooks/requests";
import SalonButton from "@/components/SalonButton.vue";
import {onMounted, ref, onUpdated, onBeforeMount, watch, computed, reactive} from "vue";
import router from "../router/router";

const data = reactive({
  salons: [],
});

window.onclick = function (e) {
  if (location.href === "http://localhost:3000/salons") {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      let salonId = inputs[i].name;
      if (e.target.className === "originalTitle" + salonId || e.target.className === "originalNbParticipants" + salonId) {
        e.target.style.display = "none";
      } else {
        const outsideClick = !inputs[i].contains(e.target);
        if (outsideClick) {
          let originalTitle = document.getElementsByClassName("originalTitle" + salonId);
          let newTitle = document.getElementById("salonTitleInput" + salonId) ?? originalTitle;
          let originalNbParticipants = document.getElementsByClassName("originalNbParticipants" + salonId);
          let newNbParticipants = document.getElementById("salonNbParticipantsInput" + salonId) ?? originalNbParticipants;

          originalTitle[0].style.display = "block";
          originalNbParticipants[0].style.display = "contents";

          httpEditSalon(originalTitle[0].id, newTitle.value, newNbParticipants.value);
          if (document.getElementById("salonTitleInput" + salonId) !== null) {
            document.getElementById("salonTitleInput" + salonId).remove();
          }

          if (document.getElementById("salonNbParticipantsInput" + salonId) !== null) {
            document.getElementById("salonNbParticipantsInput" + salonId).remove();
          }
        }
      }
    }
  }
}

const handleClick = function (id) {
  router.push("/salons/" + id);
}

const handleCreate = function () {
  router.push("/salons/create");
}

const deleteSalon = function (id) {
  httpDeleteSalon(id);
}

const editTitle = async (e) => {
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
}

const editNbParticipants = async (e) => {
  let salonId = e.target.id;
  let originalNbParticipants = e.target;
  let salonNbParticipantsSection = document.getElementById("salon__nb__" + salonId);
  let salonNbParticipantsInput = document.createElement("input");
  salonNbParticipantsInput.type = "number";
  salonNbParticipantsInput.id = "salonNbParticipantsInput" + salonId;
  salonNbParticipantsInput.name = salonId;
  salonNbParticipantsInput.value = e.target.innerText;
  originalNbParticipants.style.display = "none";
  salonNbParticipantsSection.append(salonNbParticipantsInput);
}

const getData = async () => {
  data.salons = await httpGetSalons();
}

onMounted(() => {
  getData();
});

watch(data, () => {
  getData();
});
</script>

<template>
  <h1>Salons de discussion</h1>
  <div>
    <button @click="handleCreate">Create</button>
  </div>
  <div class="salons">
    <div class="salon" v-for="salon in data.salons" :key="salon.id">
      <div class="salon__header">
        <h2 class="salon__title" :id="'salon__title__' + salon.id">
          <span :class="'originalTitle' + salon.id" :id="salon.id" @click="editTitle">{{ salon.title }}</span>
        </h2>
        <p class="salon__description">
          {{ salon.description }} <br>
        </p>
        <div :id="'salon__nb__' + salon.id">
          Max participants :
          <span :class="'originalNbParticipants' + salon.id" :id="salon.id"
                @click="editNbParticipants">{{ salon.nbParticipants }}</span>
        </div>
      </div>
      <div class="salon__footer">
        <SalonButton v-bind="salon" @click="handleClick(salon.id)">Join</SalonButton>
        <button @click="deleteSalon(salon.id)">Delete</button>
      </div>
    </div>
  </div>
</template>