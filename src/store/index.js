import Vue from 'vue'
import Vuex from 'vuex'
import leaveMsgBoardStore from './modules/leaveMsgBoardStore'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        leaveMsgBoardStore
    }
})


// const state = {     // 全局管理的数据存储
//     isLogin:'0',
//     ser:null,
//     token:localStorage.getItem('token') ? localStorage.getItem('token'):'',   // token
// };
//
// export default new Vuex.Store({
//     // 存放默认值，当做date，存放全局变量
//     state: {
//         // 默认导航栏选中
//         appTab: 'home',
//         // 默认case案例结果标签页面选中
//         caseTab:{},
//         globalControlFirst:{}
//         // 默认case页面左侧选中
//
//     },
//     // 同步方法
//     mutations: {
//         updateAppTab(state,value) {
//             state.appTab = value
//         },
//         updateCaseTab(state,value) {
//             state.caseTab = value
//         },
//         updateGlobalControlFirst(state,value){
//             state.globalControlFirst = value
//
//         },
//
//
//         $_setToken(state, value) { // 设置存储token
//             state.token = value;
//             localStorage.setItem('token', value);
//         },
//         $_removeStorage(state, value){  // 删除token
//             localStorage.removeItem('token');
//         },
//     },
//
//
//
//     getters:{    // 监听数据变化的
//         getStorage(state){   // 获取本地存储的登录信息
//             if(!state.token){
//                 state.token =JSON.parse(localStorage.getItem(key))
//             }
//             return state.token
//         }
//     }
//
//
// });