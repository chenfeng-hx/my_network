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
         * @param token 新的 token 值
         */
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
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
         * @param username String 登录后传递的用户名
         * @param userId String 要持久化的用户 Id
         */
        setUserName(state, { username, userId }) {
            state.username = username;
            localStorage.setItem('token_id', userId);
        },
        /**
         * 用于其他组件动态的控制是否展示登录窗口
         * @param state
         * @param value
         */
        setDialog(state, value) {
            state.loginStatus = value;
        },
    },



    getters: {
        status(state) {
            return state.loginStatus
        },
        username(state) {
            return state.username
        }
    }


});