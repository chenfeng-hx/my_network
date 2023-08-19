/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023-08-19 16:00:44 编写而成！
 *     祝你食用愉快！！！
 */

import axios from "axios";

export function request(config) {
	// 创建 axios 实例
	const instance = axios.create({
		baseURL: 'https://localhost:9000',
		headers: {
			"Authorization": localStorage.getItem("token"),
		},
		timeout: 20000,
	})

	return instance(config);
}