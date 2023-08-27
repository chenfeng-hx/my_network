/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “my-network” 中
 *    于 2023-03-25 16:40:45 编写而成！
 *    祝你食用愉快！！！
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
	{ path: '/', name: 'Home', component: () => import('@/views/Home/Home.vue') },
	{ path: '/home', name: '首页', component: () => import('@/views/Home/Home.vue') },
	{ path: '/msgBoard', name: '留言板', component: () => import('@/views/leaveMsgBoard/messageBoard.vue') },
	{ path: '/magicBox', name: '百宝箱', component: () => import('@/views/TreasureBox/TreasureBox.vue') },

]


const router = new VueRouter({
	routes,
	mode: "hash",
	scrollBehavior() {
		return { x: 0, y: 0 }
	}
})
export default router