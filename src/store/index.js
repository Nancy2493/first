import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'


Vue.use(Vuex)//告诉vue使用vuex

const state = {
	level: 'have fun',
	itemNum: 1,
	allTime: 0,
	timer: '',
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "fly fly fly",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 66,
			"topic_id": 20,
			"answer_name": "草",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 67,
			"topic_id": 20,
			"answer_name": "酸奶",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 68,
			"topic_id": 20,
			"answer_name": "黄豆",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 69,
			"topic_id": 20,
			"answer_name": "花",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "狼最爱吃啥",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 70,
			"topic_id": 21,
			"answer_name": "羊",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 71,
			"topic_id": 21,
			"answer_name": "草",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 72,
			"topic_id": 21,
			"answer_name": "人",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 73,
			"topic_id": 21,
			"answer_name": "酸奶",
			"is_standard_answer": 0
		}]
	}],
	answerid: {}
}
//整合初始状态和变更函数，我们就可以获取store中的数据
export default new Vuex.Store({
	state,
	actions,
	mutations
})