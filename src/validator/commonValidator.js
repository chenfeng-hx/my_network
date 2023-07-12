/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-16 10:10:00 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 公共校验部分
 */

// 导入请求体头部信息
const { header } = require('express-validator')
// 导入 jwt
const jwt = require('jsonwebtoken')

exports.commonValidator = [
	header('Authorization')
		.trim()
		.custom(value => {
			// 通过 JWT 的校验
			jwt.verify(value, abc, () => {
				return 'error'
			})
		})
]

// b7a71b93-8948-4744-9f7d-f2ad3f57269e  678