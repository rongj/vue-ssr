import Vue from 'vue'

import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { sync } from 'vuex-router-sync'

// import './assets/scss/reset.scss'

import * as filters from './utils/filters'
let filterObj = filters;
Object.keys(filterObj).forEach(key => {
    Vue.filter(key, filterObj[key])
})

// const app = new Vue({
//     el: '#app',
//     router,
//     render: h => h(App)
// })

export function createApp () {
	sync(store, router)
    const app = new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    })
    return { app, router, store }
}
