<template>
      <div class="main-content flex flex-col flex-grow p-4">
        <h1 class="font-bold text-2xl text-gray-700">Dashboard</h1>
        <div
          class="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"
        >
          <!-- Component Start -->
			    <DiscussionBoard />
		      <!-- Component End  -->
        </div>
      </div>
      <ChatBoot />
</template>

<script>
import DiscussionBoard from '@/components/DiscussionBoard.vue';
import ChatBoot from '@/components/ChatBoot.vue';

export default {
  components: {
	  DiscussionBoard,
    ChatBoot
  }
}
</script>