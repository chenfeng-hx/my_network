import Vue from 'vue'
import Vuex from 'vuex'
import leaveMsgBoardStore from './modules/leaveMsgBoardStore'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        leaveMsgBoardStore
    }
})