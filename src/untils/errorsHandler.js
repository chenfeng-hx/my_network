/**
 * 当前代码编辑信息: 处理接口校验返回的错误信息
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023-08-27 15:17:00 编写而成！
 *     祝你食用愉快！！！
 */

/**
 * 处理错误原因
 * @param rowErrors [{}] 后端返回的错误列表
 * @returns {{}} 处理后的“干净的”错误信息
 */
export const errorsHandler = rowErrors => {
	const errors = {};
	rowErrors.forEach(item => {
		if (item.msg !== "Invalid value") {
			if (!errors[item.path]) {
				errors[item.path] = item.msg;
			}
		}
	})
	return errors;
}