/**
 * 当前代码编辑信息: 百宝箱数据模型
 *     由用户 尘封 使用 WebStorm 在 “server” 中
 *     于 2023-08-25 15:06:38 编写而成！
 *     祝你食用愉快！！！
 */

const mongoose = require("mongoose");
const { Schema } = require('mongoose')
// 引入公共字段
const { commonPrototypeSchema } = require('./base-model')

const magicBoxSchema = new Schema({
	// 用户ID
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		require: true,
		ref: 'User',
	},
	// 模块名称（这个网址所对应的模块分类）(可能会有多个分类)
	modules: {
		type: Array,
		require: true,
	},
	// 网址标题
	websiteTitle: {
		type: String,
		require: true,
	},
	// 网址简介
	websiteBio: {
		type: String,
		default: "猜猜这个是干嘛的捏"
	},
	// 网址链接
	websiteURL: {
		type: String,
		require: true,
		index: true,
	},
	// 网址截图
	websiteImg: {
		type: String,
		default: 'http://blogs.xiaohai-hx.cn/view-default/default-image/%E6%9E%B6%E5%AD%90.png',
	},
	// 公共字段
	...commonPrototypeSchema,

})



// 创建模型
const MagicBox = mongoose.model('MagicBox', magicBoxSchema);

// 导出模型
module.exports = MagicBox