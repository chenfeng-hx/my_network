/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-14 16:56:29 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 用户模型
 */

const mongoose = require("mongoose");
const { Schema } = require('mongoose')
// 引入公共字段
const { commonPrototypeSchema } = require('./base-model')
const { nanoid } = require('nanoid')

const userSchema = new Schema({
	// 用户名称
	username: {
		type: String,
		require: true,
		index: true,     // 建立索引
		unique: true,    // 唯一的值
		trim: true,      // 调用trim()
	},
	// 用户密码
	password: {
		type: String,
		require: true,
		trim: true,
	},
	// 用户邮箱
	email: {
		type: String,
		require: true,
		trim: true,
		unique: true
	},
	// 用户手机号
	phoneNumber: {
		type: String,
		default: nanoid(),
		trim: true,
		unique: true
	},
	// 性别
	sex: {
		type: String,
		default: '薛定谔的猫'
	},
	// 年龄
	age: {
		type: Number,
		default: 18,
		min: 1,
		max: 150,       	// 限制年龄的大小
	},
	// 个人简介(好像都在用 bio 定义这个字段)
	personalIntroduction: String,
	// 用户头像地址(前端用户自己选择)
	avatar: {
		type: String,
		default: ''
	},
	// 用户文章
	articles: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Article'
		}
	],
	// 点赞的文章
	likes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Article'
		}
	],
	// 收藏的文章
	collections: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Article'
		}
	],
	// 用户百宝箱
	magicBoxes: [
		{
			// 模块的名称
			moduleTitle: {
				type: String,
				require: true,
			},
			// 模块的图标
			moduleIcon: {
				type: String,
				default: 'http://blogs.xiaohai-hx.cn/view-default/icon/%E9%A3%8E%E8%BD%A6.svg',
			},
		}
	],
	// 公共字段
	...commonPrototypeSchema,

})

// 调用 pre 钩子为个人简介赋值
userSchema.pre('save', function (next) {
	// 如果不存在, 则指定默认值
	if (!this.personalIntroduction) {
		this.personalIntroduction =
			this.sex === 'boy'
				? '大帅哥一枚'
				: this.sex === 'girl'
					? '大漂亮一枚'
					: '大聪明一枚'
	}
	next();
})


// 创建模型
const User = mongoose.model('User', userSchema);

// 导出模型
module.exports = User