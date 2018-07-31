import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
	return new Router({
		mode: 'history',
		routes: [
			{
				path: '/',
				component: () => import('../pages/index.vue'),
				name: 'index',
				meta: {
					title: 'Vue服务端渲染首页'
				}
			},
			{
				path: '/detail/:type/:id',
				component: () => import('../pages/detail.vue'),
				name: 'detail',
				meta: {
					title: '详情页'
				}
			}
		]
	})
}