/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “my-network” 中
 *    于 2023-03-25 16:40:45 编写而成！
 *    祝你食用愉快！！！
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import MessageBoard from "@/views/messageBoard.vue";
import Home from "@/views/Home.vue";
const routes = [
	{ path: '/', component: Home },
	{ path: '/msgBoard', component: MessageBoard }
]


const router = new VueRouter({
	routes,
	mode: "hash",
	scrollBehavior() {
		return { x: 0, y: 0 }
	}
})
export default router