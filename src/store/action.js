import ajax from '../config/ajax'
// action 可以执行异步操作
export default {
	addNum({ commit, state }, id) {
		commit('REMBER_ANSWER', { id })
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', {
				num: 1
			}) //payload 为一个对象
		}
	},

	getData({ commit, state }) {
		ajax('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4').
		then(res => {
			commit('GET_DATA', {
				res
			})
		})
	},

	initializeData({ commit }) {
		commit('INITIALIZE_DATA')
	}
}