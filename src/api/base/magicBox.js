/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023-08-27 21:45:56 编写而成！
 *     祝你食用愉快！！！
 */

import { request } from "@/api/base/request";

// 获取全部的百宝箱数据
export const getWebsite = username => {
	return request({
		url: '/magicBox/getWebsites',
		method: 'get',
		params: {
			username,
		}
	})
}

// 存储新网址
export const saveWebsite = formData => {
	return request({
		url: '/magicBox/saveWebsite',
		method: 'patch',
		data: formData,
	})
}

// 存储新模块
export const saveModule = formData => {
	return request({
		url: '/magicBox/addModule',
		method: 'patch',
		data: formData,
	})
}