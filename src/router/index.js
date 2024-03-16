import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name:'home',
        component: ()=>import('@/pages/home/index.vue')

    },{
        path: '/login',
        name:'login',
        component:()=>import('@/pages/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
