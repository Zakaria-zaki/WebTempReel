<template>
        <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
			<Message 
				fullName="Slimane Achbouq"
				message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				date="2 min ago"
				rightMessage="true"
			/>
			<Message 
				fullName="Zakaria Achbouq"
				message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				date="2 min ago"
			/>
		</div>
		<footer class="bg-gray-200 text-center lg:text-left">
  <div class="text-gray-700 text-center p-4" style="background-color: rgba(0, 0, 0, 0.2);">
    
	      <button
        type="button"
        class="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
      >
        Request discussion
      </button>
  </div>
</footer>
		<div class="bg-gray-300 p-4">
			<input class="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…">
		</div>
</template>

<script>
import Message from '@/components/Message.vue';
export default {
  components: {
    Message
  }
}
</script>