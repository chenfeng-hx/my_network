/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “server” 中
 *     于 2023-08-27 21:56:19 编写而成！
 *     祝你食用愉快！！！
 */


// 公共校验字段
const User = require("../models/user");
const verificationCodes = require("../models/verificationCodes");
const { header } = require('express-validator');
const jwt = require("jsonwebtoken");

// 需要携带用户名进行 token 验证
exports.tokenValidator = header('Authorization')
	.trim()
	.isJWT()
	.custom(async (value, { req }) => {
		try {
			// 先拿到生成 token 的密钥
			// 1. 先拿到 email
			let username;
			if (req.method === 'GET') {
				username  = req.query.username;
			} else {
				username = req.body.username;
			}
			const user = await User.findOne({ username });
			// 2. 通过 email 查询密钥
			const secret = await verificationCodes.findOne({ email: user.email });

			// 通过 JWT 的校验
			jwt.verify(value, secret.secret, (err, decoded) => {
				if (err) throw new Error('token失效，请重新登录');
				// 校验成功则将查询到的用户信息挂载到请求体中
				req.user = user;
			})
		} catch (err) {
			throw new Error('亲，请登录后操作呦！')
		}
	})


// 不需要携带用户名请求验证
exports.tokenInitValidator = header('Authorization')
	.trim()
	.isJWT()
	.custom(async (value, { req }) => {
		try {
			// 先拿到生成 token 的密钥
			// 1. 先拿到 email
			let userId = req.header('token_id');
			const user = await User.findById(userId);
			console.log(user);
			// 2. 通过 email 查询密钥
			const secret = await verificationCodes.findOne({ email: user.email });

			// 通过 JWT 的校验
			jwt.verify(value, secret.secret, (err, decoded) => {
				if (err) throw new Error('token失效，请重新登录');
				// 校验成功则将查询到的用户信息挂载到请求体中
				req.user = user;
			})
		} catch (err) {
			throw new Error('亲，请登录后操作呦！')
		}
	})

