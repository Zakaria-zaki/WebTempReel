<template>
  <router-view v-if="this.$route?.name == 'login'" v-slot="slotProps">
            <component :is="slotProps.Component"></component>
  </router-view>
  <div v-else class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <SideMenu />
      <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <Header />
        <router-view v-slot="slotProps" :key="$route.fullPath">
            <component :is="slotProps.Component"></component>
        </router-view>
        <footer class="footer px-4 py-6">
          <div class="footer-content">
            <p class="text-sm text-gray-600 text-center">© ESGI 2022. All rights reserved.</p>
          </div>
        </footer>
      </main>
  </div>
          
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
import Header from '@/components/Header.vue';
export default {
  components: {
    SideMenu,
    Header
  },
  created () {
    this.$store.dispatch('auth/tryLogin');
  },
  beforeUnmount() {
    // SocketioService.disconnect();
  }
}
</script>