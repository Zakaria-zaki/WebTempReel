import { createRouter, createWebHistory } from 'vue-router';
import UserAuth from '@/pages/security/UserAuth.vue';
import MessagesHome from '@/pages/MessagesHome.vue';
import GroupsListing from '@/pages/GroupsListing.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'login', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/messages', component: MessagesHome, meta: { requiresAuth: true } },
        { path: '/groups', component: GroupsListing, meta: { requiresAuth: true } }
    ]
})

export default router;