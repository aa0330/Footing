import { createRouter, createWebHistory } from "vue-router";
import { isAuth } from '@/util/auth'
import { whiteList } from "@/store/public_data/index";

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
    {
        path: '/test',
        component: () => import('@/components/info_box/index.vue')
    }, {
        path: '/computed',
        name: 'Components_route',
        component: () => import('@/pages/computed/index.vue'),
        children: [
            {
                path: '/mixtureA',
                name: 'A',
                components: {                                               //  命名视图
                    bigA: () => import('@/pages/A/index.vue'),
                    smalla: () => import('@/pages/A/a.vue'),
                    default: () => import('@/pages/A/middleaA.vue')
                }
            },
            {
                path: '/b',
                name: 'B',
                component: () => import('@/pages/B/index.vue')
            },
        ]
    }, {
        path: '/pinia',
        name: 'pinia',
        component: () => import('@/pages/pinia/index.vue')
    }, {
        path: '/watch',
        name: 'watch',
        component: () => import('@/pages/watch/index.vue')
    }, {
        path: '/inject',
        name: 'inject',
        component: () => import('@/pages/inject/index.vue')
    }, {
        path: '/interview',
        name: 'interview',
        component: () => import('@/pages/interview/index.vue')
    }, {
        path: '/dynamic_com',
        name: 'dynamic_com',
        component: () => import('@/pages/dynamic_com/index.vue')
    }
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
