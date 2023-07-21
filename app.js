/**
 * 程序入口
 */

// 引入主框架
const express = require('express')

// 引入跨域处理中间件
const cors = require('cors')
// 引入日志处理中间件
const saveMorgan = require('./src/middleware/saveReqLogs')
// 引入解析 application/formData 表单请求体数据的中间件
const multer  = require('multer')
// 解析表单请求体
const upload = multer()

// 引入用户路由
const userRouter = require('./src/router/user')
// 连接数据库
require('./src/utils/dbConnection');



// 引入基础变量
const { PORT } = require('./src/config/base-variable')
// 引入错误处理中间件
const errorHandler = require('./src/middleware/error-handler')



// 创建应用实例
const app = express();

// 保存日志
app.use(saveMorgan)
// 处理跨域
app.use(cors());
// 解析表单请求体
app.use(upload.none())
// 挂载路由
app.use('/user', userRouter);

// 处理页面 404


// 请求出错处理
app.use(errorHandler);

// 启动服务, 监听端口
app.listen(PORT, () => {
	console.log(`服务已经成功启动于: http://localhost:${PORT}.`);
})