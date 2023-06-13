# 开发文档
## 项目结构
- .
  |
  +-- node_modules/              // 存放所有的npm包
  |
  +-- src/
  |   |
  |   +-- config/                // 存放配置文件
  |   |   |-- index.js
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