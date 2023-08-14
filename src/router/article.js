/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “server” 中
 *     于 2023-08-03 18:48:46 编写而成！
 *     祝你食用愉快！！！
 */

/**
 * 该文件用于存放与文章操作有关的路由信息
 */

// 引入路由函数
const { Router } = require('express');
const fs = require('fs')

// 创建路由实例对象
const router = Router();

// 引入上传文件函数
const { upLoadNewFile } = require('../utils/uploadFile')

// 博客文章上传功能
router.post('/uploadArticle', async (req, res, next) => {
	try {
		const Info = {
			path: `server-default/${req.body.username}/${req.body.use}/`,
			name: req.body.fileName || req.file.originalname,
			buffer: req.file.buffer
		}
		const url = await upLoadNewFile(Info);
		if (url) {
			res.status(200).json({
				msg: '文章上传成功',
				url,
			})
		} else {
			res.status(400).json({
				msg: '文章上传失败，请稍后重试或联系管理员',
			})
		}
	} catch (e) {
		next(e)
	}
})

// 请求博客
router.get('/getArticle', async (req, res, next) => {
	fs.readFile('D:\\学习相关\\知识库\\Typora\\Typora图片上传.md', 'utf-8', (err, data) => {
		if (err) console.log(err.message);
		res.status(200).json({
			text: data
		})

	})
})



// 导出路由
module.exports = router