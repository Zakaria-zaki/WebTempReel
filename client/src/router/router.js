import { createRouter, createWebHistory } from 'vue-router';
import UserAuth from '@/pages/security/UserAuth.vue';
import MessagesHome from '@/pages/MessagesHome.vue';
import GroupsListing from '@/pages/GroupsListing.vue';
import AddGroup from '@/pages/AddGroup.vue';
import EditGroup from '@/pages/EditGroup.vue';
import Dashboard from '@/pages/Dashboard.vue';
import GroupChat from "@/pages/GroupChat.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'login', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requiresUnauth: true } },
        { 
            path: '/messages/:receiverId',
            name: 'messages',
            component: MessagesHome,
            meta: { requiresAuth: true },
            props: true,
        },
        { path: '/groups', name: 'groups', component: GroupsListing, meta: { requiresAuth: true } },
        { path: '/groups/add', name: 'add_group', component: AddGroup, meta: { requiresAuth: true } },
        { path: '/groups/:groupId', name: 'edit_group', component: EditGroup, meta: { requiresAuth: true } },
        { path: '/groups/chat/:id', name: 'join_group', component: GroupChat, meta: { requiresAuth: true } }
    ]
})

export default router;