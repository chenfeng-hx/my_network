/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-15 10:34:20 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 保存日志文件
 */

const { readFile } = require('fs');
const { promisify } = require('util')
const ReadFile = promisify(readFile)
// 引入日志模型
const Log = require('../models/log')


/**
 * 保存 / 更新 日志文件
 * @param filePath 要保存的文件路径
 * @param fileName 该文件的文件名
 * @param logInfo  该文件的日志类型
 * @return {Promise<void>}
 */
exports.saveLogFile = async (filePath, fileName, logInfo) => {
	try {
		await ReadFile(filePath)
			.then(data => {
				Log.findOne({fileName: fileName})
					.then(doc => {
						// 返回 null: 表示不存在该记录
						if (!doc) {
							// 保存日志文件到数据库
							const log = new Log({
								fileName: fileName,
								fileContent: data,
								fileType: logInfo,
								fileSize: data.length
							});
							log.save().then(() => console.log('文件保存成功')).catch((err) => console.log('文件保存失败', err));
							return;
						}
						// 存在该记录,就更新文件内容和文件大小
						Log.findOneAndUpdate({fileName: fileName}, {
							fileContent: data,
							fileSize: data.length
						}, {new: true})
							.then(res => console.log('文件更新成功'))
							.catch(() => console.log('文件更新失败'))

					}).catch((err) => {
					console.log(err);
					console.log('查找出错');
				});
			}).catch(err => console.error('文件读取错误\n', err))
	} catch (err) {
		console.log(err)
	}
}

