/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-13 19:40:37 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 该文件用于对用户身份验证的处理
 */

const { validationResult } = require('express-validator')

// 用户登录
exports.userLoginHandler = (req, res, next) => {
	try {
		const result = validationResult(req);
		if (result.isEmpty()) res.send('he');
	} catch (err) {
		res.send({ errors: result.array() })
	}
}


// 用户注册
exports.userRegisterHandler = (req, res, next) => {
	try {
		const result = validationResult(req);
		if (!result.isEmpty()) {
			return res.status(401).json({ errors: result.array() })
		}
	} catch (err) {
		next(err);
	}
}