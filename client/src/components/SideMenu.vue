<template>
    <aside
      class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-700"
    >
      <div class="sidebar-header flex items-center justify-center py-4">
        <div class="inline-flex">
          <a href="#" class="inline-flex flex-row items-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHwklEQVR4nO2ZaVBU2RXHSWWtSuVDMkmVkFQqH/IhlQ8RnLEMWysoskrLOs0mGomKpEYWRWgWUWaUTRBklaX73R4WIU6NM6UUgg7jkhmQjpY6ARX6PSYow4xsIxOlb+s/dd8I09Dd0M2iqQqn6l90Nd3nnt87995z7m0rqxVbsRVbsf8FG22zXjPeuip+tNXG7qUOjAe1v6T9Kl+dQBKpQEqoQJSUJ4QKpEzHq+RUUAaiv85mPj9jrdbnGMRYqzUdb7PGWKu1drTFxnbZg9fxJE7Hc2rKc891AsF8ojz3mU4gqfi36jem/I63rUpgENNqXRW/PAD9tT+nAjlOeW7CnOCNAgncJOW5KmNZGm21sWOZmMrIyMVfr15yCF2/KpgK3NBCAQyByNc6gcQA+N4MmBYb2/HWVXFLDgF89AMqcKVLBWAgnvs7BslPlzRoAwhe8RMdz32wbBDClLhP8HnlL/THHnEK8BmRBIyPOAd5Lw4Cjd/X8aTJ1OCaKwWoPbYHh7b5IlXmjbQXSg/1QUqINyqSI6E+mwmq4cwF6tDPDANgIMMSfy+zgx7fuPW1R04BcWN/Dpp+KpQnObMHe9xdhcbcvUiReaF8bzg6c1Iw0VCMp01lBrpX8g5q43YiOdgTrTUH2a5lzkZQt6inPywJih+RBILBiBAa5Wb9bfVpnxINOdFIfdMb7W8fwH8aS6YD/rr+JIaU+ejKTYE6LxXXc1KgKT86/f/H9cV472A0MiJ9MaQuMWfN/GXBICwTo86Bsewv7hX+mArkrr7z03kxKN0dhieNpWJwLPCOLLmYkT69oKf0sCYPndly3D5xePo9viILSQEeuH8pb556Q4Zxr/pXVos1sdDNcj7RU40D/u5iQAzmbkmm0elkTF9xBbhdmCG+fqQ6AXmQJzTt+UYhnj34QBSrVYuCQFfFDylPBmYPMHr7lBiAucEbZihXzNAUWFKQB57cV5gG4bkJDHCvLRjkRc9kMEBl6g5x/i8U5FuA/GmYy+8kQnk4ar71ErNwEIHUznY42adEUqDHvIG2pMcizssNmTIpRuuKjH5mTO/9lGAvo1n5btGTKwuCYK0CFcjgbIfdF7JR89b2OSFyI4IQv2YdLtt7on7dRrz5p9VoTovFxYwEkyqIDEZZciQGu4zvZJTnKLqrfmY5CK/4nTGH58ri8XHmgTlBwlfb4UtJAJrXbUavkxQN9m6Qv5WAkuIqkzp5sgoF+aVI3y0zmRWtRimxGITVDmPO6o7twY3jaXOCRNm9AVaHdq+2E2FYZgqzi3BNMzavEnZE4Ju7NSZgVFEWg+g0XKQxZw3Z0fOChK99A584eokwLDMpG9xw9vJNs0DysnLR05ZjqgdLsxxEIDHGnDUd34uysCA8rMoxCdJXkSXC7LR9HdtsX4c8OhZXeofNAqlUvYfz1QdNFcccy0F4bo+4lw+ex7PhDuj6a0Vn1xrSULl2PZrsN6HC1R2n/KS4mXnQJBQrmOfSYxHtJ0X9h+3zgtR/+DHq8/eZ6r2OLgQklH0Zz56CmQgjEPBXC1Bsv16cNlP6QhKAB37bUL5VivbUWKON4yNVIfJ3RWL/rmhcuMGbBKk7ewmNhfGm+q4ki0G0gsKRffn5BC/CsMyIDWOvAkn2DjNA9NXp5IPusO14eCwdXyiOGwDdOpGBWD9fFBadwtXeEQOQd9+/iDPFCaZqicxiEHawMXWRkObhiiHnAJMwTA+d/UFcPVATFoyB6twZMKxbbkz8G/YGBuBM2/UZIOWK02iuSjQKMqkhlh93J7uC19Du9EFdb7GBw8a3d6PF3n1OEH2g2k2e4CJDMPJu4QwglrHDETIk79uPS3ceiCBZmcdw69xRI+uDjLLDncUQWnUIpeoQUHUodH0zq+3YZ5WQOzmBd9pqFgwT7+yHCndPNCfGTLf/U/o0KwVRXh6oqG5A4q6dGLlVYayyn7Y4G9ouWcK3EC/Uc8TA8bW6FGRFSJHotgFHXFxQK9mMDgcvDDn7zwnUscEXRVu3iB2wPgw7cOX/NQLBjg7oazc8o9B+ssVikMlOmZ1WLdMyCG1XyHNdn+H00hd7gp82HYJCvgOpUjckukpwwmUjmh08MODsZwAzJPFHlZsnPkqPM9gMlPt2oPNMxuxs9LHbG4tBRJgbobZatSxO25MRzZxN/MNlvjZbf2DxMuJ8aTwyg7yQvF4Cpb0L/ungg2E9oIubpFBFhU8flb85XYoEv81GLigW0JoYs8VeAbEtu7PpEIoj/RHrYI/itc6447hFhLm1XgplVLgI8r48Bs3l+2fXDrXFi9yUoY/7LTs7LwZGX/cvZCM/TIpER0fkOm1Az8kj4hYtD/GckQ0qkCeTvGJpL66pwPlQntMtFQzT+L9OQXF4J5IDPUUNdBTN/Ew/2WW1HDbVfy21vrpZZtDxUoE7SrtCfbRq2TjtknkvAwzZzk5rywGk+26zyGJjMQAR5HqI+beLlhjVcO5UIF8uA8BjnUDCrF6mQVBZU4GrX0KQFnxOfm/1qkwrEAedQM6b+0uVgXhylfJKz5ca9LiRy+0ZlxW8Sq4TSDsVyNM5pg9lPxtQnsuEoPqj1auw4VmX26aMtRNsmlCBuFJe6UcFEkD7uU3gFX/AncYfWb1qG9O73H7VsazYiq3Y/6n9F1uEnHY4oAe1AAAAAElFTkSuQmCC">
            <span class="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">Motoservices</span>
          </a>
        </div>
      </div>
      <div class="sidebar-content px-4 py-6">
        <ul class="flex flex-col w-full">
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
            >
              <span class="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg"
            >

              <label v-if="userRole == 'Admin'" class="inline-flex relative items-center mr-5 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-300">Talking to clients ?</span>
              </label>
            </a>
          </li>
          <li class="my-px">
            <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">Account</span>
          </li>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span class="ml-3">Profile</span>
            </a>
          </li>
          <!-- <li class="my-px">
            <router-link
              :to="{ name: 'groups'}"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </span>
              <span class="ml-3">Notifications</span>
              <span
                class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
              >10</span>
            </router-link>
          </li> -->
          <li class="my-px">
            <router-link
              :to="{ name: 'groups'}"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span class="ml-3">Groups</span>
            </router-link>
          </li>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="flex items-center justify-center text-lg text-red-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span class="ml-3">Logout</span>
            </a>
          </li>
          <li class="my-px">
            <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">Clients</span>
          </li>
            <SideMenuConversation
              v-for="user in connectedClients"
              v-bind:key="user.id"
              :fullName="user.firstName + ' ' + user.lastName"
              :connected="true"
              :receiverId="user.id"
            />
          <li class="my-px">
            <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">sales consultant</span>
          </li>
            <SideMenuConversation
              v-for="user in connectedAdministrators"
              v-bind:key="user.id"
              :fullName="user.firstName + ' ' + user.lastName"
              :connected="true"
              :receiverId="user.id"
            />
            <!-- <SideMenuConversation fullName="Group 1" />
            <SideMenuConversation fullName="Group 2" />
            <SideMenuConversation fullName="Group 3" /> -->
          <li class="my-px">
            <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">Groups</span>
          </li>
            <!-- <SideMenuConversation fullName="Kelly" :connected="true" />
            <SideMenuConversation fullName="Sanchez" :connected="true" />
            <SideMenuConversation fullName="King" :connected="true" /> -->
        </ul>
      </div>
    </aside>
</template>

<script>
import SideMenuConversation from '@/components/SideMenuConversation.vue';
export default {
  data() {
    return {
      connectedClients : [],
      connectedAdministrators : [],
      userRole: null
    }
  },
  components: {
    SideMenuConversation
  },
  sockets: {
    connect: function () {
      console.log('socket to notification channel connected')
    },
    userConnected: function (connectedUsers) {
      const connectedUserEmail = this.$store.state.auth.email;
      const users = connectedUsers.filter(function(user) {
        return user.email !== connectedUserEmail;
      });
      this.connectedClients = users.filter(function(user) {
        return user.role !== 'ROLE_ADMIN'
      });
      this.connectedAdministrators = users.filter(function(user) {
        return user.role === 'ROLE_ADMIN'
      });
    }
  },
  mounted: function () {
    if (this.$store.state.auth.token) {
      this.$socket.emit('connected', this.$store.state.auth.token);
    }
    this.userRole = this.$store.getters['auth/role'];
  }
}
</script>