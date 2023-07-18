/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-13 17:28:27 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 该文件主要用于存放公共变量的名称，防止写错
 */

// 项目监听的端口号
const PORT = process.env.PORT || 9000
// mongodb 本地连接地址
const localAddr = 'mongodb://127.0.0.1:27017/network'
// 保存的日志的类型
const logFileType = ['HttpReq', 'dbCRUD']

module.exports = {
	PORT,
	localAddr,
	logFileType,

}