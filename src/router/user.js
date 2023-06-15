/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “node-server” 中
 *    于 2023-06-13 18:28:35 编写而成！
 *    祝你食用愉快！！！
 */

/**
 * 该文件用于存放与用户身份验证有关的路由信息
 */

// 引入路由函数
const { Router } = require('express');

// 引入用户身份请求对应的验证规则
const { userLoginValidator,  userRegisterValidator} = require('../validator/user')
// 引入身份验证之后的处理
const { userLoginHandler, userRegisterHandler } = require('../controllers/user')


// 创建路由实例对象
const router = Router();

// 用户登录
router.get('/login', userLoginHandler)


// 用户注册
router.post('/register', userRegisterValidator,  userRegisterHandler);

// 导出路由
module.exports = router
