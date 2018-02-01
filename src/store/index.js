// store
import Vue from 'vue'
import Vuex from 'vuex'

// import state from './state'
// import actions from './actions'
// import mutations from './mutations'

Vue.use(Vuex)

import { getArticleDetail } from '../api/service.js'


export default new Vuex.Store({
	state: {
		items: {}
	},
	actions: {
		fetchItem({ commit }, params) {
			// `store.dispatch()` 会返回 Promise，
			// 以便我们能够知道数据在何时更新
			return getArticleDetail(params).then(item => {
				commit('setItem', item.article )
			})
		}
	},
	mutations: {
		setItem(state, data) {
			state.items = data
		}
	}
})

// 针对server端的store, 也需要提供工厂方法来保持单例
// export function createStore() {

//     return new Vuex.Store({
//         state,
//         actions,
//         mutations
//     });

// }

// export default new Vuex.Store({
// 	state,
// 	actions,
// 	mutations
// });
