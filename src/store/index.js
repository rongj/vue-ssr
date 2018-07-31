import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { getRecommendList, getArticleDetail } from '../api/service.js'

// 针对server端的store, 也需要提供工厂方法来保持单例
export function createStore() {
	return new Vuex.Store({
		state: {
			list: [],
			articleDetail: {}
		},
		actions: {
			fetchList({ commit }, payload) {
				return getRecommendList(payload).then(data => {
					commit('setList', data.data.map(item => {
						return {
							articletp: item.articletp,
							title: item.title,
							articleid: item.articleid
						}
					}))
				})
			},

			fetchDetail({ commit }, payload) {
				// `store.dispatch()` 会返回 Promise，
				// 以便我们能够知道数据在何时更新
				return getArticleDetail(payload).then(data => {
					commit('setDetail', data.article )
				})
			}
		},
		mutations: {
			setList(state, data) {
				state.list = data
			},

			setDetail(state, data) {
				state.articleDetail = data
			},
		}
	})
}