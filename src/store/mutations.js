const GET_DATA = 'GET_DATA'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_USER_INFORM = 'GET_USER_INFORM'

//mutation 必须同步执行，只能通过mutations改变store的state的状态，用store.commit('increment')调用;
export default {
	[GET_DATA](state, payload) {
		if (payload.res.httpStatusCode == 200) {
			state.itemDetail = payload.res.topiclist;
		}
	},
	//mutation(突变）的回调函数，state为第一个参数，payload为载荷 ，应该为一个对象

	[GET_USER_INFORM](state, payload) {
		state.user_id = payload.res.users_id;
	},
    //使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
	[ADD_ITEMNUM](state, payload) {
		state.itemNum += payload.num;
	},

	[REMBER_ANSWER](state, payload) {
		state.answerid[state.itemNum] = payload.id;
	},

	[REMBER_TIME](state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},

	[INITIALIZE_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
	},
}