import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import menuRoutes from './menuRoutes';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Index.vue'),
        children: menuRoutes,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
