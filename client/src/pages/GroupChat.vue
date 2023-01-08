<template>
  <div class="main-content flex flex-col flex-grow p-4">
    <router-link :to="{name: 'groups'}" class="text-sm text-gray-600 dark:text-gray-400 hover:underline">
      <a href="#" @click="leaveGroup" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Leave room
      </a>
    </router-link>
    <DiscussionGroup />
  </div>
</template>

<script>
import DiscussionGroup from "@/components/DiscussionGroup.vue";

export default {
  components: {DiscussionGroup},
  props: ["title", "id", "membersMax"],
  name: "GroupChat",
  methods: {
    leaveGroup() {
      this.$socket.emit('leaveSalon', {msg: " a quitté le salon ", room: this.title});
    }
  }
};
</script>

<style scoped>

</style>