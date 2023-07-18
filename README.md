# 开发文档

## 代码规范
1. 尽量做到每行代码或每个功能点都有注释, 每个变量名都见名知义, 还有最开头的文档注释
2. 做到模块化思想, 尽量做到松耦合, 每个模块方便后期的修改



## 单个文件注意点 mark
1. 插件内容:
   1. express: 项目主框架
   2. cors: 解决跨域问题(也可以通过设置请求头的方式来解决跨域问题)
   3. mongoose: 用于和数据库进行交互, 存储用户身份信息
   4. express-validator: 用于对请求的字段进行校验
   5. jsonwebtoken: 用于对用户身份信息进行校验, token 的设置和校验
   6. morgan: 用于打印日志并进行存储,方便后续的请求查询, 对一些 bug 的处理回溯
   7. multer: 用于解析表单请求体 formData


## 说明 test
1. 整体项目使用 node + express 搭建, 数据库使用 mongodb
2. 包管理器使用 yarn `yarn` `yarn add` `yarn remove`


## 新增需求 todo (功能完成后使用 ==> 标注并将解决过程说明在后面)
1. 保存文件到数据库 ==> 通过定时器改变变量的方式去同步更新数据库
2. 对请求的字段进行校验


## 待修复 fixme
1. 


## 接口文档 api
链接: https://apifox.com/apidoc/shared-415e1ff4-30da-431f-a902-4cc4a1e187d4  访问密码: lyy


## 项目结构
```markdown
.
  |
  +-- node_modules/              // 存放所有的npm包
  |
  +-- src/
  |   |
  |   +-- config/                // 存放配置文件
  |   |   |-- config.default.js  // 基础配置
- |   |   |-- 
- |   |   |-- 
  |   |
  |   +-- controllers/           // 存放控制器代码
  |   |   |-- blogController.js
  |   |   
  |   +-- helpers/               // 存放代码辅助功能文件
  |   |   |-- database.js        // 数据库连接配置
  |   |
  |   +-- middleware/            // 存放中间件代码
  |   |
  |   +-- models/                // 存放模型文件
  |   |   |-- blogModel.js
  |   |
  |   +-- routes/                // 存放路由文件
  |   |   |-- blogRoutes.js
  |   |   |-- userRoutes.js
  |   |
  |   +-- app.js                 // 应用主文件
  |   |
  |   +-- index.js               // 项目的入口文件
  |
  +-- test/                      // 存放测试代码
  |
  +-- package.json               // 存放项目的依赖和其他信息
  |
  +-- README.md                  // 存放项目说明文件
```