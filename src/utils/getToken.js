/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “server” 中
 *     于 2023-07-22 16:29:19 编写而成！
 *     祝你食用愉快！！！
 */

/**
 * 该文件用于生成 token 函数
 */

// 随机值
const { nanoid } = require('nanoid')
// token
const jwt = require('jsonwebtoken')
// 验证码模型
const VerificationCode = require('../models/verificationCodes')

// 生成 token
exports.generateToken = Info => {
	try {
		// 生成随机密钥
		const secret = nanoid();
		console.log('nanoid',secret);
		// 生成 token(以 username, password 为信息生成)
		const token = jwt.sign({ ...Info }, secret);
		// 对 secret 进行存储,如果需要生成 token，就必定已经有了账号，所以一定可以查询到, 方便后续的验证
		VerificationCode.updateOne(
			// 查询条件
			{ email: Info.email },
			// 更新的字段和值
			{ secret: secret },
			// 选项：返回更新后的记录，默认为 false，即返回原始记录
			// { new: true },
		).then(res => {
			console.log('存储 token 成功');
			console.log(res);
		}).catch(err => {
			// throw new Error('存储 token 失败' + err.message);
			console.log('存储 token 失败' + err.message)
		})
		console.log(token);
		return token;
	} catch (err) {
		throw new Error('生成 token 失败' + err.message);
	}
}


