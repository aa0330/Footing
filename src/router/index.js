import { createRouter, createWebHistory } from "vue-router";
import { isAuth } from '@/util/auth'
import { whiteList } from "@/util/whiteList";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home/index.vue')
    }, {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/index.vue')
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// 路由守卫        
router.beforeEach((to, from, next) => {
    if (!(whiteList.includes(to.path) | isAuth())) {
        next('/login')
    } else {
        next()
    }
})


export default router;