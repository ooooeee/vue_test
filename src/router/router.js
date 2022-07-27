import Main from '@/pages/Main.vue';
import { createRouter, createWebHistory } from 'vue-router';
import PostPage from '@/pages/PostPage.vue'
import About from '@/pages/About.vue'
import PageOfId from '@/pages/PageOfId.vue';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/post',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/post/:id',
        component: PageOfId
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;