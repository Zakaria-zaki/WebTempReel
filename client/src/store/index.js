import { createStore } from 'vuex';

import authModule from '@/store/modules/auth/index.js';
import socketModule from '@/store/modules/socket/index.js';

const store = createStore({
  modules: {
    auth: authModule,
    sock: socketModule,
  }
});

export default store;