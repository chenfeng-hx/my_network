/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023-08-19 16:50:22 编写而成！
 *     祝你食用愉快！！！
 */

/**
 * 主要书写与用户相关的请求接口
 */

import { request } from "@/api/base/request";

// 用户请求 用户名 + 密码 登录
export const login = ({ username, password }) => {
	return request({
		url: '/user/login',
		method: 'get',
		params: {
			username,
			password,
		}
	})
}