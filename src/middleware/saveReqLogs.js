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
// 引入日志的类型
const { logFileType } = require('../config/base-variable')
// 将日志文件保存到数据库
const {saveLogFile} = require("../utils/saveLogs");
// 定时器保存日志文件
const {startTimer} = require("../utils/TimeClock");

// 当天应该创建的文件名
let fileName = getCurrentDate() + '.log';
// 前一天的文件名
let preFileName = '2023-08-10.log';
// 文件路径
let filePath = path.join(__dirname, `../../public/requestLogs/${fileName}`);
// 前天的文件路径
let preFilePath = path.join(__dirname, `../../public/requestLogs/${preFileName}`);

// 首先创建当天的日志文件(异步操作, 防止阻塞主进程请求的响应)
// fs.appendFile(filePath, '祝好运呀@ _ @\n', err => {
// 	if (err) return '文件创建失败'
// })

// 自定义部分格式
morgan.token('reqBody', req => {
	if (req.method === 'GET') return JSON.stringify(req.query);
	return JSON.stringify(req.body);
})

// 打印的日志格式
const format = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :reqBody --- :status :res[content-length] :response-time ms  - ":referrer" ":user-agent" - :total-time ms';

// 日志写入文件(当文件不存在时会自动创建文件, 所以不需要 appendFile)
const logStream = fs.createWriteStream(filePath, { flags: 'a' });

// setUp
const saveMorgan =  morgan(format, { stream: logStream });

// 导出配置
module.exports = saveMorgan

// 更新变量并保存文件到数据库
const upDateVariable = () => {
	// 如果是当天, 那 fileName 不会变, 否则就执行 if
	fileName = getCurrentDate() + '.log';
	if (fileName !== preFileName) {
		// 保存前一天的日志文件(其实此时的 filePath 还没有发生改变, 还是之前的文件路径, 可以省掉 preFilePath)
		saveLogFile(preFilePath, preFileName, logFileType[0]).catch();
		// 更新
		filePath = path.join(__dirname, `../../public/requestLogs/${fileName}`)
		preFileName = fileName;
		preFilePath = filePath;
	}
	// 保存当天的日志文件(这一步其实可以不用做, 可以始终只保存前一天的日志文件)
	saveLogFile(filePath, fileName, logFileType[0]).catch();
}

// 每隔一段时间去更新变量(每隔一分钟去更新, 这样做会导致有较少的当天的请求日志会记录在昨天)
startTimer(upDateVariable, 1000 * 60 * 2)
// 保存每天的日志文件(其实更好地做法是通过 fs.watch 监视文件内容的变化去保存, 可以保证每个文件的所有内容都被保存到)
// startTimer(saveLogFile, 1000 * 60 * 60 * 12, filePath, fileName, logFileType[0])