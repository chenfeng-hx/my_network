/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “server” 中
 *     于 2023-08-03 08:45:54 编写而成！
 *     祝你食用愉快！！！
 */

const mongoose = require("mongoose");
const { Schema } = require('mongoose')
// 引入公共字段
const { commonPrototypeSchema } = require('./base-model')

const articleSchema = new Schema({
	// 文章标题
	title: {
		type: String,
		require: true,
	},
	// 文章作者
	author: {
		type: mongoose.Schema.Types.ObjectId,
		require: true,
		ref: 'User',
	},
	// 文章点赞数
	likes: {
		type: Number,
		default: 0
	},
	// 文章收藏数
	collections: {
		type: Number,
		default: 0
	},
	// 公共字段(已经包含 createTime)
	...commonPrototypeSchema,
	// 最后一次更新时间
	updateTime: {
		type: Date,
		default: Date.now
	},
	// 上传的地址
	upLoadURL: {
		type: String,
		default: ''
	},
	// 文章所属的类别(文章分类)
	Classification: {
		type: String,

	}
})


// 创建模型
const Article = mongoose.model('User', articleSchema);

// 导出模型
module.exports = Article