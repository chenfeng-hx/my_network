/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-13 18:36:40 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 错误处理中间件
 */

module.exports = () => {
	return (err, req, res, next) => {
		return res.status(500).json({
			code: -1,
			msg: err.message
		})
	}
}