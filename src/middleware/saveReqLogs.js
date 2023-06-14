/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-13 19:48:33 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 该文件用于保存请求日志信息
 */

// 引入日志处理中间件
const morgan = require('morgan')
// 引入文件处理
const fs = require('fs')
// 引入路径处理
const path = require('path')

// 引入时间函数作为每一个日志文件的文件名称
const { getCurrentDate } = require('../utils/getDate')
// 可以使用 token 自定义日志的参数
// const { token } = require("morgan");

// 当天应该创建的文件名
const fileName = getCurrentDate() + '.log';
// 文件路径
const filePath = path.join(__dirname, `../../public/requestLogs/${fileName}`);

// 首先创建当天的日志文件(异步操作, 防止阻塞主进程请求的响应)
// fs.appendFile(filePath, '祝好运呀@ _ @\n', err => {
// 	if (err) return '文件创建失败'
// })

// 打印的日志格式
const format = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms  - ":referrer" ":user-agent" - :total-time ms';

// 日志写入文件(当文件不存在时会自动创建文件, 所以不需要 appendFile)
const logStream = fs.createWriteStream(filePath, { flags: 'a' });

// setUp
const saveMorgan =  morgan(format, { stream: logStream });

// 导出配置
module.exports = saveMorgan