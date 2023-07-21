/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-13 19:40:37 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 该文件用于对用户身份验证的处理
 */

// 对校验规则的检验结果进行判断
const { validationResult } = require('express-validator')
// 引入用户数据库模型
const User = require('../models/user')
// 引入发送邮件的方法
const { sendEmails } = require('../utils/sendEmail')
// 引入验证码存储模型
const Code = require('../models/verificationCodes')

// 用户登录
exports.userLoginHandler = (req, res, next) => {
	try {
		const result = validationResult(req);
		// 如果有校验失败的情况，向前端发送字段校验异常信息
		if (!result.isEmpty()) {
			return res.status(401).json({ errors: result.array() })
		}
		// 校验成功则发送对应的成功信息
		return res.status(200).json({
			msg: '登录成功'
		})
	} catch (err) {
		next(err);
	}
}


// 用户注册
exports.userRegisterHandler = (req, res, next) => {
	try {
		const result = validationResult(req);
		// 如果有校验失败的情况，向前端发送字段校验异常信息
		if (!result.isEmpty()) {
			return res.status(401).json({ errors: result.array() })
		}
		// 校验成功则对用户信息进行存储并发送对应的成功信息
		// 如果校验成功则一定包含下面的几个字段,进行数据库存储
		const { username, password, email, phoneNumber, sex, age, personalIntroduction } = req.body;
		const newUser = new User({ username, password, email, phoneNumber, sex, age, personalIntroduction });
		newUser.save()
			.then(() => console.log('存储用户成功'))
			.catch(err => res.status(400).json({ msg: '存储用户失败'+ err.message }));

		return res.status(200).json({
			msg: '注册成功'
		})
	} catch (err) {
		next(err);
	}
}

// 用户邮箱验证码
exports.userGetCodeHandler = async (req, res, next) => {
	try {
		const result = validationResult(req);
		// 校验失败发送失败信息
		if (!result.isEmpty()) {
			return res.status(401).json({ errors: result.array() })
		}

		const { username, password, email } = req.body;
		// 先查找有无用户所输入的邮箱(是否已经注册过),如果有则不允许获取，必须更换邮箱地址(更为快速的响应客户端，避免数据库等操作造成不必要的时间耗费 1.25s -> 37ms)
		const dbEmail = await Code.findOne({ email: email })
		if (dbEmail) return res.status(401).json({ msg: '该账号已存在, 请重新更换邮箱注册' });

		// 校验成功发送邮箱验证码
		const verificationCode = await sendEmails({ username, password, email });

		// 保存邮箱验证码到数据库方便后续的用户注册进行验证码查找
		const code = new Code({ email, verificationCode });
		code.save().then(() => console.log('验证码存储成功'))
			// .catch(err => {
			// 	return res.status(400).json({
			// 		msg: '存储验证码失败' + err.message
			// 	})
			// });

		return res.status(200).json({
			msg: '验证码发送成功，请及时查收！'
		})
	} catch (err) {
		next(err);
	}
}