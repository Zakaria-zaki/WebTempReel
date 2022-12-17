import { createRouter, createWebHistory } from 'vue-router';
import UserAuth from '@/pages/security/UserAuth.vue';
import MessagesHome from '@/pages/MessagesHome.vue';
import SalonsHome from "@/pages/SalonsHome.vue";
import SalonChat from "@/components/SalonChat.vue";
import SalonForm from "@/pages/SalonForm.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/messages', component: MessagesHome, meta: { requiresAuth: true } },
        { path: '/messages/salons/new', component: MessagesHome, meta: { requiresAuth: true } },
        { path: '/salons', component: SalonsHome, meta: { requiresAuth: true } },
        { path: '/salons/delete/:id', component: SalonsHome, meta: { requiresAuth: true } },
        { path: '/salons/edit/:id', component: SalonsHome, meta: { requiresAuth: true } },
        { path: '/salons/:id', component: SalonChat, meta: { requiresAuth: true } },
        { path: '/salons/create', component: SalonForm, meta: { requiresAuth: true } }
    ]
})

export default router;