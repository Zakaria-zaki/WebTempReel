import { createStore } from 'vuex';

import authModule from '@/store/modules/auth/index.js';
import activeUsersModule from '@/store/modules/activeUsers/index.js';

const store = createStore({
  modules: {
    auth: authModule,
    activeUsers: activeUsersModule
  }
});

export default store;