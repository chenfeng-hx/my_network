import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        // token
        token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
        // 用户名（因为后端逻辑的原因需要每次携带用户名验证 token 的正确与否）
        username: '',
        // 是否通过<Header />打开登录框
        loginStatus: false,
    },
    // 同步方法
    mutations: {
        /**
         * 持久化 token
         * @param state
         * @param value 新的 token 值
         */
        setToken(state, value) {
            state.token = value;
            localStorage.setItem('token', value);
        },
        /**
         * 删除 token
         * @param state
         */
        removeStorage(state){
            state.token = '';
            localStorage.removeItem('token');
        },
        /**
         * 持久化 当前登录用户名
         * @param state
         * @param value String 登录后传递的用户名
         */
        setUserName(state, value) {
            state.username = value;
        },
        setDialog(state, value) {
            state.loginStatus = value;
        },
    },



    getters: {
        status(state) {
            return state.loginStatus
        }
    }


});