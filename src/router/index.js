import Home from '../views/Home.vue';
import About from '../views/About.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;