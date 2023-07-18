/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-15 11:04:51 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 该文件主要用于设置定时器并做一些保存性的工作
 */


exports.startTimer = (callBack, Interval, ...args) => {
	return setInterval(() => {
		callBack(...args)
	}, Interval)
}