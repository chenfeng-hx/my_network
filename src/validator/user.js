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
const { body } = require('express-validator')
// 引入 User 模型
const User = require('../models/user')


// 用户注册信息校验规则
exports.userRegisterValidator = [
	// 校验用户名
	body('username')
		.trim()      // 去空
		.notEmpty().withMessage('用户名不能为空')			// 不能为空
		.escape().withMessage('您已被系统检测到不良行为, 请注意您的征信哦')          // 预防 xss 攻击, <script>
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
	// 校验重复密码
	body('reWritePwd')
		.trim()
		.notEmpty().withMessage('请确认密码')
		.custom((value, { req }) => {
			if (value !== req.body.password) throw new Error('快看看你哪一个密码出错啦');
		}),
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
		.withMessage('请填写正确的验证码哦'),
]