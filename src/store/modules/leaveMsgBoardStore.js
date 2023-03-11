const actions = {
    shiftMsg(ministore, value) {
        ministore.commit('SHIFTMSG', value)
    }
}
const mutations = {
    SHIFTMSG(state, value) {
        state.comments.unshift(value)
        console.log(state.comments)
    }
}
const state = {
    comments: [
        {
            msgID: 'abc',
            msgRoot: '张三',
            msgContent: '我是张三',
            msgTimer: '2023-03-11 16:14:33'
        },
    ]
}

export default({
    namespaced: true,
    actions,
    mutations,
    state
})