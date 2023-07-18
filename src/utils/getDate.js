/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-14 10:40:33 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 该文件用于处理时间并获得相应的格式
 */


/**
 * 返回当前的日期
 * @return String {`${number}-${number|string}-${number|string}`}
 */
exports.getCurrentDate = () => {
	// 获取当前时间
	const currentTime = new Date();
	// 得到年份
	let year = currentTime.getFullYear();
	// 得到月份
	let month = currentTime.getMonth() + 1;
	// 得到具体日期
	let day = currentTime.getDate();

	// 对得到的日期进行格式化处理
	month = month > 9 ? month : '0' + month;
	day = day > 9 ? day : '0' + day;

	// 返回格式化后的时间
	return `${year}-${month}-${day}`
}
