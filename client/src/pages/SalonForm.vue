<script setup>
import {httpCreateSalon} from "@/hooks/requests";
import router from "../router/router";
import {ref} from "vue";

const title = ref("");
const description = ref("");


function handleSubmit() {
  if (title.value === "" || description.value === "") {
    alert("Veuillez remplir tous les champs");
    return;
  }

  let salon = {
    title: title.value,
    description: description.value,
  };

  httpCreateSalon(salon);
  router.push("/salons");
}
</script>

<template>
  <div class="salon-form">
    <h1>Créer un salon</h1>

    <form @submit.prevent="handleSubmit">
      <div class="salon-form form-group">
        <label for="title">Titre</label>
        <input type="text" id="title" required v-model="title"/>
      </div>

      <div class="salon-form form-group" style="margin-top: 20px">
        <label for="description">Description</label>
        <input type="text" id="description" required v-model="description"/>
      </div>

      <div>
        <input type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>