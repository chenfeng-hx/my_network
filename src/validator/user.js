/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-13 19:32:34 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 主要处理用户身份验证的验证规则
 */

// 引入解析后的请求体
const { body, query } = require('express-validator')
// 引入 User 模型
const User = require('../models/user')
// 引入验证码模型
// const verificationCodes  = require('../models/verificationCodes')
// 其实没必要存储验证码，后知后觉，因为可以再算一遍验证码直接比较，减少IO操作应该更快速
const { getCryptoCode } = require('../utils/verificationCode')


// 用户登录信息校验规则
exports.userLoginValidator = [
	// 校验用户名
	query('username')
		.trim()
		.notEmpty().withMessage('用户名不能为空')
		.isLength({ min: 4 })
		.matches(/^[\u4e00-\u9fa5a-zA-Z0-9\-]+$/)  // 判断格式
		.custom(async (value, {req}) => {
			const user = await User.findOne({ username: value });
			// 此处应该判断的是找不到该用户名,如果找到该用户就将其挂载到req中向下传递，方便后续的验证过程而不再导致重复查询
			if (!user) throw new Error('账号或密码错误');
			req.pass = user.password;
		})
		.withMessage('账号或密码错误'),
	query('password')
		.trim().notEmpty().isLength({ min: 5 })
		.custom(async (value, {req}) => {
			const user = await User.findOne({ username: req.query.username, password: value })
			if (!user) {
				throw new Error('账号或密码错误');
			}
			// 类型和值均相同，但是结果却是相反的
			// console.log(value !== Object.toString(req.password))
			// if (value !== Object.toString(req.password)) {
			// 	throw new Error('账号或密码错误');
			// }
		})
		.withMessage('账号或密码错误'),
]


// 用户注册信息校验规则
exports.userRegisterValidator = [
	// 校验用户名
	body('username')
		.trim()      // 去空
		.notEmpty().withMessage('用户名不能为空')			// 不能为空
		.escape().withMessage('您已被系统检测到不良行为, 请注意您的征信哦')          // 预防 xss 攻击, <script>(验证了之后感觉好像没什么用)
		.isLength({ min: 4 }).withMessage('用户名太短啦! 换一个吧')       // 判断用户名长度
		.matches(/^[\u4e00-\u9fa5a-zA-Z0-9\-]+$/).withMessage('用户名只能包含汉字、字母、数字或短横线-')  // 判断格式
		.custom(async value => {
			const user = await User.findOne({ username: value });
			if (user) throw new Error('站长认为你的名字还可以更好听捏');
		}),
	// 校验密码
	body('password')
		.trim()
		.notEmpty().withMessage('密码不能为空')
		.isLength({ min: 5 }).withMessage('密码过短会被盗号哦')
		.escape().withMessage('您已被系统检测到不良行为, 请注意您的征信哦'),
	// // 校验重复密码(改为前端进行校验，不再发送给后端)
	// body('reWritePwd')
	// 	.trim()
	// 	.notEmpty().withMessage('请确认密码')
	// 	.custom((value, { req }) => {
	// 		if (value !== req.body.password) throw new Error('快看看你哪一个密码出错啦');
	// 	}),
	// 校验邮箱
	body('email')
		.trim()
		.notEmpty().withMessage('邮箱不能为空')
		.isEmail().withMessage('邮箱格式不正确')
		.custom(async value => {
			const email = await User.findOne({ email: value });
			if (email) throw new Error('该邮箱已绑定账号, 换一个吧');
		}),
	// 校验验证码
	body('verificationCode')
		.trim()
		.notEmpty().withMessage('请填写验证码再注册哦')
		.isLength({ min: 6, max: 6 })
		.custom(async (value, { req }) => {

			// const code = await verificationCodes.findOne({ email: req.body.email, verificationCode: value });
			// // 如果不存在
			// if (!code) throw new Error('请填写正确的验证码')
			// // 没有通过判断说明存在

			// 9ms 应该更快速于数据库查询
			const { username, password, email } = req.body;
			const code = await getCryptoCode({ username, password, email });
			if (code !== value) throw new Error('请填写正确的验证码');


		})
		.withMessage('请填写正确的验证码哦'),
]

// 用户获取邮箱验证码校验规则, 和用户注册校验相同，因为涉及到对用户的身份信息进行加密再保存为验证码，避免多次发送验证码造成不必要的浪费
exports.userGetCodeValidator = [
	// 校验用户名
	body('username')
		.trim()      // 去空
		.notEmpty().withMessage('用户名不能为空')			// 不能为空
		.escape().withMessage('您已被系统检测到不良行为, 请注意您的征信哦')          // 预防 xss 攻击, <script>(验证了之后感觉好像没什么用)
		.isLength({ min: 4 }).withMessage('用户名太短啦! 换一个吧')       // 判断用户名长度
		.matches(/^[\u4e00-\u9fa5a-zA-Z0-9\-]+$/).withMessage('用户名只能包含汉字、字母、数字或短横线-')  // 判断格式
		.custom(async value => {
			const user = await User.findOne({ username: value });
			if (user) throw new Error('站长认为你的名字还可以更好听捏');
		}),
	// 校验密码
	body('password')
		.trim()
		.notEmpty().withMessage('密码不能为空')
		.isLength({ min: 5 }).withMessage('密码过短会被盗号哦')
		.escape().withMessage('您已被系统检测到不良行为, 请注意您的征信哦'),
	// 校验邮箱
	body('email')
		.trim()
		.notEmpty().withMessage('邮箱不能为空')
		.isEmail().withMessage('邮箱格式不正确')
		.custom(async value => {
			const email = await User.findOne({ email: value });
			if (email) throw new Error('该邮箱已绑定账号, 换一个吧');
		}),
]