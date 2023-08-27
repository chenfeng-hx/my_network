import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') ? localStorage.getItem('token'):'',   // token
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
    },



    getters: {

    }


});