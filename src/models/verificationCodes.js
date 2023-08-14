/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “server” 中
 *     于 2023-07-21 17:57:49 编写而成！
 *     祝你食用愉快！！！
 */

/**
 * 用户验证码模型:其实可以只保存邮箱和对应的验证码，当前端发送对应的信息之后再重新计算一次验证码，如果相同则认为注册之前——获取到验证码之后这段时间信息没有发生修改
 */

const mongoose = require("mongoose");
const { Schema } = require('mongoose');
// 引入公共字段
const { commonPrototypeSchema } = require('./base-model')

const verificationCodeSchema = new Schema({
	// 用户邮箱
	email: {
		type: String,
		require: true,
		trim: true,
		unique: true
	},
	// 邮箱验证码
	verificationCode: {
		type: String,
		require: true,
		trim: true,
	},
	// 密钥
	secret: {
		type: String,
		require: true,
		default: "",
		trim: true
	},
	...commonPrototypeSchema,

})

// 创建模型
const verificationCode = mongoose.model('VerificationCode', verificationCodeSchema, 'verificationcodes');

// 导出模型
module.exports = verificationCode