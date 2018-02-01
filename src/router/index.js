import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/pages/index.vue'
// import detail from '@/pages/detail.vue'

Vue.use(Router)

const index = () => import('../pages/index.vue')
const detail = () => import('../pages/detail.vue')

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index,
            name: 'index'
        },
        {
            path: '/detail/:type/:id',
            component: detail,
            name: 'detail'
        }
    ]
})