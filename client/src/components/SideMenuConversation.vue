<template>
        <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <div class="relative">
                  <span v-if="connected" class="absolute text-green-500 right-0 bottom-0">
                    <svg width="20" height="20">
                        <circle cx="15" cy="15" r="5" fill="currentColor"></circle>
                    </svg>
                  </span>
                  <div
                    class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full text-gray-500"
                  >
                    {{ fullName[0].toUpperCase() }}
                  </div>
              </div>
              <span class="ml-3">{{ fullName }}</span>
              <span
                class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
              >2</span>
            </a>
        </li>
</template>

<script>
export default {
    props: ['fullName', 'connected']
}
</script>