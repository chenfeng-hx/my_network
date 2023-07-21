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
const { userLoginValidator,  userRegisterValidator, userGetCodeValidator} = require('../validator/user')
// 引入身份验证之后的处理
const { userLoginHandler, userRegisterHandler, userGetCodeHandler } = require('../controllers/user')


// 创建路由实例对象
const router = Router();

// 用户登录
router.get('/login', userLoginValidator, userLoginHandler)


// 用户注册(先通过字段的校验，然后根据校验结果进行结果逻辑处理)
router.post('/register', userRegisterValidator,  userRegisterHandler);

// 用户点击按钮获取邮箱验证码
router.post('/getVerificationCode', userGetCodeValidator, userGetCodeHandler);

// 导出路由
module.exports = router
