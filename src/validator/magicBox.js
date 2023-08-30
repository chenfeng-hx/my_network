/**
 * 当前代码编辑信息: 主要处理百宝箱网址存储相关的验证规则
 *     由用户 尘封 使用 WebStorm 在 “server” 中
 *     于 2023-08-25 15:04:29 编写而成！
 *     祝你食用愉快！！！
 */


// 引入解析后的请求体
const { body, query, check} = require('express-validator')
// 公共校验部分
const { tokenValidator } = require('./baseValidator')


// 用户获取所有的网址信息
exports.getWebsitesValidator = [
	tokenValidator,
]

// 用户存储新网址
exports.saveWebsiteValidator = [
	// 校验 token
	tokenValidator,
	// 校验网站标题
	body('websiteTitle')
		.trim()
		.notEmpty().withMessage('这是个什么网址呢，让我来猜一猜？')
		.isString().withMessage('它真的是个标题吗'),
	// 校验网站链接
	body('websiteURL')
		.trim()
		.notEmpty().withMessage('所以这个网站到底在哪儿捏？')
		.isURL().withMessage('它真的是一个链接吗'),
	// 校验网站简介
	body('websiteBio')
		.trim()
		.notEmpty().withMessage('忘了这个网站是干嘛的就糟了')
		.isString().withMessage('请输入更精简的网站简介'),
	// 检验网站图片
	check('file')
		.custom((value, { req }) => {
			if (req.file !== undefined) {
				if (req.file.mimetype.split('/')[0] !== 'image') {
					throw new Error('请上传 image 类型文件！')
				}
				// 50MB (防止上传一个大 mp4 上来)
				if (req.file.size > 50501987) {
					throw new Error('文件较大，请压缩后（小于 50MB）重新尝试')
				}
			}
		}),
	// 校验模块名
	body('modules')
		.custom(value => {
			if (value.length === 0) throw new Error('请至少选择一个模块！');
		}),
]

// 用户添加新的模块
exports.addModuleValidator = [
	tokenValidator,
	// 校验新模块名
	body('newModule')
		.isString().withMessage('模块名称格式出错，请联系管理员')
		.matches(/^[a-zA-Z0-9\u4e00-\u9fa5!?-_]+$/).withMessage('模块格式出错，只能包含大小写字母、数字、汉字以及!?-_ 建议精炼一点哦')
]