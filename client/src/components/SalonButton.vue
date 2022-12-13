<script setup>
const props = defineProps({
  onClick: {
    type: Function,
  },
});

function handleClick($event) {
  console.log($event.target.getAttribute("title"));
  props.onClick();
}
</script>

<template>
  <button class="Button" v-on:click="handleClick">
    <slot>Button</slot>
  </button>
</template>

<style scoped>

</style>