/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “server” 中
 *     于 2023-08-25 15:00:48 编写而成！
 *     祝你食用愉快！！！
 */

// 引入路由函数
const { Router } = require('express');
// 引入用户身份请求对应的验证规则
const magicBoxValidator = require('../validator/magicBox')
// 引入身份验证之后的处理
const magicBoxHandler = require('../controllers/magicBox')


// 创建路由实例对象
const router = Router();

// 用户获取所有的网址存储
router.get('/getWebsites', magicBoxValidator.getWebsitesValidator, magicBoxHandler.getWebsitesHandler)

// 用户进行网址存储
router.patch('/saveWebsite', magicBoxValidator.saveWebsiteValidator, magicBoxHandler.saveWebsiteHandler)

// 用户对单个网址的内容进行修改
router.patch('/modifyWebsite', magicBoxValidator.saveWebsiteValidator, magicBoxHandler.modifyWebsiteHandler)

// 用户对单个网址进行删除
router.delete('/deleteWebsite', )

// 用户添加新的模块
router.patch('/addModule', magicBoxValidator.addModuleValidator, magicBoxHandler.addModuleHandler)


// 导出路由
module.exports = router