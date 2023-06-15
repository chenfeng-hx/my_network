/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-14 17:16:35 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 用于存放日志信息的 schema
 */

const { Schema } = require('mongoose')
// 引入公共字段
const { commonPrototypeSchema } = require('./base-model')
const mongoose = require("mongoose");

const logSchema = new Schema({
	// // 日志的标题
	fileName:{
		type: String,
		require: true,
		index: true,     // 建立索引
		unique: true,    // 唯一的值
		trim: true,      // 调用trim()
	},
	// // 日志的内容
	fileContent: Buffer,
	// // 日志的类型 ( HttpReq / dbCRUD )
	fileType: {
		type: String,
		require: true
	},
	// 日志的大小
	fileSize: Number,
	...commonPrototypeSchema,
})


// 创建模型
const Log = mongoose.model('Log', logSchema);

// 导出模型
module.exports = Log