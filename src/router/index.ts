import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'mainLayout',
        component: () => import('@/views/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('@/views/Dashboard.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router