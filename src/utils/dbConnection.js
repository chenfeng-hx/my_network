/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-14 16:41:24 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 连接数据库
 */


const mongoose = require('mongoose')
// 本地的数据库路径
const { localAddr } = require('../config/base-variable')


// 连接方法
mongoose.connect(localAddr)
	.then(() => console.log('数据库连接成功!'))
	.catch(() => console.log('数据库连接失败!'));