<template>
		<div v-if="rightMessage" class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
			<div>
				<span class="text-xs text-gray-500 leading-none">{{ fullName }}</span>
				<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
					<p class="text-sm">{{ message }}</p>
				</div>
				<span class="text-xs text-gray-500 leading-none">{{ date }}</span>
			</div>
			<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
		</div>
		<div v-else class="flex w-full mt-2 space-x-3 max-w-xs">
			<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			<div>
				<span class="text-xs text-gray-500 leading-none">{{ fullName }}</span>
				<div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
					<p class="text-sm">{{ message }}</p>
				</div>
				<span class="text-xs text-gray-500 leading-none">{{ date }}</span>
			</div>
		</div>
</template>

<script>
export default {
    props: ['fullName', 'message', 'date', 'rightMessage']
}
</script>