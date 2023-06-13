/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-13 19:32:34 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 主要处理用户身份验证的验证规则
 */

// 引入解析 application/formData 表单请求体数据的中间件
const multer  = require('multer')
// 解析表单请求体
const upload = multer()