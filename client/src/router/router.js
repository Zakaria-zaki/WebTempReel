import { createRouter, createWebHistory } from 'vue-router';
import UserAuth from '@/pages/security/UserAuth.vue';
import MessagesHome from '@/pages/MessagesHome.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/messages', component: MessagesHome, meta: { requiresAuth: true } }
    ]
})

export default router;