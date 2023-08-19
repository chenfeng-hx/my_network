/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023-08-18 17:47:33 编写而成！
 *     祝你食用愉快！！！
 */

import axios from "axios";

// 请求一言短句的数据
export function getShortSentence(data = {}) {
	return axios.get('https://v1.hitokoto.cn', data)
}