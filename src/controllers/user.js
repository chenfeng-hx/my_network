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
// 生成 token
const { generateToken } = require('../utils/getToken')


// 用户登录
exports.userLoginHandler = async (req, res, next) => {
	try {
		const result = validationResult(req);
		// 如果有校验失败的情况，向前端发送字段校验异常信息
		if (!result.isEmpty()) {
			return res.status(401).json({ errors: result.array() })
		}
		// 校验成功则发送对应的成功信息
		// 生成 token 并存储
		const { username, password } = req.query;
		// 因为 verificationCodes 模型需要用到 email， 所以根据信息先将 email 查询出来
		let email = "";
		await User.findOne({ username, password }).then(res => {
			email = res.email;
		}).catch(err => {
			throw new Error('用户登录根据用户名密码查询邮箱出错' + err.message);
		})
		const token = generateToken({ username, password, email });

		// 拿到 token 并进行发送
		return res.status(200).json({
			msg: '登录成功',
			token,
			username,
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

// 用户注册账号发送邮箱验证码
exports.userGetCodeHandler = async (req, res, next) => {
	try {
		const result = validationResult(req);
		// 校验失败发送失败信息
		if (!result.isEmpty()) {
			return res.status(401).json({ errors: result.array() })
		}

		const { username, password, email } = req.body;

		// 对获取验证码的情况进行判断
		const dbEmail = await Code.findOne({ email: email })
		// 邮箱存在，报错
		if (dbEmail) {
			return res.status(401).json({ msg: '该账号已存在, 请重新更换邮箱注册' });
		}

		// 校验成功发送邮箱验证码
		const verificationCode = await sendEmails({ username, password, email });


		// 保存邮箱验证码到数据库方便后续的用户注册进行验证码查找
		const code = new Code({ email, verificationCode });
		code.save()
			.then(() => console.log('验证码存储成功'))
			.catch(err => {
				return res.status(400).json({
					msg: '存储验证码失败' + err.message
				})
			});

		return res.status(200).json({
			msg: '验证码发送成功，请及时查收！'
		})
	} catch (err) {
		next(err);
	}
}

// 用户修改个人信息发送邮箱验证码
exports.userChangeInfoGetCodeHandler = async (req, res, next) => {
	try {
		const result = validationResult(req);
		// 校验失败发送失败信息
		if (!result.isEmpty()) {
			return res.status(401).json({ errors: result.array() })
		}

		const { username, password, email } = req.body;

		// 校验成功发送邮箱验证码
		const verificationCode = await sendEmails({ username, password, email });

		// 更新邮箱验证码到数据库方便后续的用户注册进行验证码查找
		await Code.updateOne({ email }, { secret: verificationCode })
			.then(doc => {
				return res.status(200).json({
					msg: '验证码发送成功，请及时查收！'
				})
			})
			.catch(err => {
				return res.status(400).json({
					msg: '存储验证码失败' + err.message
				})
			})
	} catch (err) {
		next(err);
	}
}

// 用户修改密码
exports.userChangePwdHandler = async (req, res, next) => {
	try {
		const result = validationResult(req);
		// 校验失败发送失败信息
		if (!result.isEmpty()) {
			return res.status(401).json({ errors: result.array() })
		}
		//
		// // 检验成功
		const { username, newPwd, email } = req.body;
		// 先进行密码保存
		await User.updateOne({ username, email }, { password: newPwd })
			.then(doc => {
				return res.status(200).json({
					msg: '密码修改成功, 请重新登录'
				})
			})
			.catch(err => {
				return res.status(401).json({
					msg: '密码修改失败，请重新尝试或联系管理员' + err.message
				})
			})
	} catch (err) {
		next(err);
	}
}

// 用户修改个人信息
exports.userChangeInfoHandler = async (req, res, next) => {
	try {
		const result = validationResult(req);
		// 校验失败发送失败信息
		if (!result.isEmpty()) {
			return res.status(401).json({ errors: result.array() })
		}

		// 经过验证，对信息进行持久化保存
		const user = await User.findOne({ username: req.body.username });
		Object.entries(req.body).forEach(([key, value]) => {
			if (key !== 'username') {
				user[key] = value;
			}
		});
		// 保存数据( MongoDB会根据ID更新数据 )
		user.save()
			.then(() => {
				res.status(200).json({
					msg: '数据更新成功'
				})
			})
			.catch(err => {
				res.status(401).json({
					msg: '数据更新失败' + err.message
				})
			})
	} catch (e) {
		next(e);
	}
}


