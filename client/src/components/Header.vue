<template>
        <header class="header bg-white shadow py-4 px-4">
          <div class="header-content flex items-center flex-row">
            <div class="flex ml-auto">
              <a href class="flex flex-row items-center">
                <div class="relative">
                    <span class="absolute text-green-500 right-0 bottom-0">
                        <svg width="20" height="20">
                            <circle cx="13" cy="13" r="6" fill="currentColor"></circle>
                        </svg>
                    </span>
                    <div
                        class="flex items-center justify-center h-10 w-10 bg-orange-200 rounded-full text-gray-500"
                    >
                        {{ fullName[0].toUpperCase() }}
                    </div>
                </div>
                <span class="flex flex-col ml-2">
                  <span class="truncate w-30 font-semibold tracking-wide leading-none">{{ fullName }}</span>
                  <span class="truncate w-20 text-gray-500 text-xs leading-none mt-1">{{ role }}</span>
                </span>
              </a>
            </div>
          </div>
        </header>
</template>

<script>
export default {
    computed: {
        fullName() {
            return this.$store.getters['auth/fullName']
        },
        role() {
            return this.$store.getters['auth/role']
        }
    }
}
</script>