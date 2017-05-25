import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store, //注册store，任意组件可以使用store中的数据，就是使用计算属性返回store中的数据到一个新属性上，然后在你模板中则可以使用这个属性值了：
}).$mount('#app')