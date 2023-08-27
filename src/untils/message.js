/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023-08-27 18:09:23 编写而成！
 *     祝你食用愉快！！！
 */

/**
 * 创建 el-message 组件作为系统消息通知
 * @param vm	使用该函数的上下文环境
 * @param msg	String	系统消息内容
 * @param type	String	消息的类型	success error info warning
 * @param duration	Number 消息展示的事件	ms
 * @returns {ElMessageComponent} Component
 */
export const message = (vm, msg, type= 'success', duration=2000) => {
	// 直接写 this.$message 是不起作用的，因为这是一个独立地函数，所有并没有 this 的上下文，需要将引用组件的上下文环境传递进来才能使用
	return vm.$message({
		message: msg,
		type: type,
		duration: duration,
		offset: 100,
	})
}