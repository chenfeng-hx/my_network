// 引入主框架
const express = require('express')
// 引入路径解析模块
const path = require('path')

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
//引入文章路由
const articleRouter = require('./src/router/article')
// 引入百宝箱路由
const magicBoxRouter = require('./src/router/magicBox')


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
app.use(cors({
	origin: [ "http://localhost:3000", "http://10.17.229.74:3000", "" ]
}));
// 设置允许跨域请求的响应头
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*'); // 允许来自所有域的请求
// 	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // 允许的请求方法
// 	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头
// 	next();
// });

// 解析表单请求体(接收文件)
// 也就是说以后所有的接口传输的文件的字段名应该是 'file'
app.use(upload.single('file'))

// 设置静态页面
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/dist')))



// 挂载用户操作相关的路由
app.use('/user', userRouter);
// 挂载文章相关的路由
app.use('/article', articleRouter);
// 挂载百宝箱相关的路由
app.use('/magicBox', magicBoxRouter);

// 处理页面 404


// 请求出错处理
app.use(errorHandler);

// 启动服务, 监听端口
app.listen(PORT, () => {
	console.log(`服务已经成功启动于: http://localhost:${PORT}.`);
})