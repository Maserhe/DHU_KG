
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home/Home.vue')
            },
            {
                path: '/graph',
                name: 'graph',
                component: () => import('../views/graph/index.vue')
            },
            {
                path: '/qa',
                name: 'qa',
                component: () => import('../views/qa/index.vue')
            },
            {
                path: '/team',
                name: 'team',
                component: () => import('../views/team/index.vue')
            },
            {
                path: '/knowledgeCard',
                name: 'knowledgeCard',
                component: () => import('../views/knowledgeCard/index.vue')
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('../views/dashboard/index.vue')
            },
        ]

    }

]
  

const router = createRouter({

    history: createWebHashHistory(),

    routes, 
})

export default router