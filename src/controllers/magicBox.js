/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “server” 中
 *     于 2023-08-25 15:04:38 编写而成！
 *     祝你食用愉快！！！
 */

// 对校验规则的检验结果进行判断
const { validationResult } = require('express-validator')
const User = require('../models/user');
const MagicBox = require('../models/magicBox');
const {upLoadNewFile} = require("../utils/uploadFile");


// 用户获取所有的百宝箱数据
exports.getWebsitesHandler = async (req, res, next) => {
	try {
		const result = validationResult(req);
		// 如果有校验失败的情况，向前端发送字段校验异常信息
		if (!result.isEmpty()) {
			return res.status(201).json({ errors: result.array() })
		}

		// 校验成功
		// 存储返回的数据
		const ret = {};
		// 先查询当前用户所有的模块
		 const { username } = req.query;
		const user = await User.findOne({ username });
		// 将所有的模块名拿出来
		user.magicBoxes.forEach(item => {
			ret[item.moduleTitle] = [];
		})
		// 查询对应用户所有的
		const magicBoxes = await MagicBox.find({ userId: user._id });
		magicBoxes.forEach(item => {
			for (let i of item.modules) {
				ret[i].push(item)
			}
		})
		if (ret !== {}) {
			res.status(200).json({
				msg: '百宝箱已展示！',
				data: ret
			})
		} else {
			res.status(201).json({
				msg: '啥都没有!',
			})
		}

	} catch (err) {
		next(err);
	}
}

// 用户添加新的网址
exports.saveWebsiteHandler = async (req, res, next) =>  {
	try {
		const result = validationResult(req);
		// 如果有校验失败的情况，向前端发送字段校验异常信息
		if (!result.isEmpty()) {
			const errors = result.array().filter(item => item.msg !== "Invalid value");
			if (errors.length) return res.status(201).json({errors: result.array()});
		}
		// 处理 modules 类型问题
		const modules = req.body.modules.split(',');
		// 上传的内容没什么问题
		const { username, websiteTitle, websiteURL, websiteBio } = req.body;
		const userId = await User.findOne({ username });

		// 然后需要先找是否存在相同的内容
		const isExist = await MagicBox.findOne({ userId: userId._id.toString(), websiteURL })
		if (isExist) return res.status(201).json({
			msg: '该网址已经添加，如需修改网址信息请右键对应网址修改！'
		})

		// 相同内容不存在
		// 图片的外链
		let url;
		// 处理图片上传
		if (req.file !== undefined) {
			// 说明上传了文件
			const Info = {
				path: `server-default/${username}/百宝箱截图/`,
				name: websiteTitle + '的截图',
				buffer: req.file.buffer
			}
			// 文件上传
			url = await upLoadNewFile(Info);
		}
		// 存储数据
		const website = new MagicBox({
			userId: userId._id.toString(),
			websiteTitle,
			websiteURL,
			websiteBio,
			websiteImg: url,
			modules,
		})
		website.save()
			.then(() => {
				res.status(200).json({
					msg: '网站存储成功！',
				})
			})
			.catch((err) => {
				res.status(201).json({
					msg: '网站存储失败，请重试或联系管理员处理！' + err.message,
				})
			})

	} catch (err) {
		next(err);
	}
}

// 用户对现有的单个网址的信息进行修改
exports.modifyWebsiteHandler = async (req, res, next) => {
	try {
		const result = validationResult(req);
		// 如果有校验失败的情况，向前端发送字段校验异常信息
		if (!result.isEmpty()) {
			console.log('file',req.file)
			return res.status(401).json({ errors: result.array() })
		}


	} catch (err) {
		next(err);
	}
}

// 用户添加新模块逻辑
exports.addModuleHandler = async (req, res, next) => {
	try {
		const result = validationResult(req);
		// 如果有校验失败的情况，向前端发送字段校验异常信息
		if (!result.isEmpty()) {
			return res.status(201).json({ errors: result.array() })
		}
		// 上传的内容没什么问题
		const { newModule } = req.body;

		// 适用于[]形式的数据存储
		// newModule.forEach(item => {
		// 	// 判断该字段是否已经存在
		// 	let flag = false;
		// 	for(let obj in req.user.magicBoxes) {
		// 		if (obj.moduleTitle === item) flag = true;
		// 	}
		// 	// 说明不存在
		// 	if (!flag) {
		// 		req.user.magicBoxes.push({
		// 			moduleTitle: item,
		// 			moduleIcon: 'http://blogs.xiaohai-hx.cn/view-default/icon/%E9%A3%8E%E8%BD%A6.svg',
		// 		})
		// 	}
		// })
		let flag = false;
		for(let obj of req.user.magicBoxes) {
			if (obj.moduleTitle === newModule) flag = true;
		}
		// 是新模块，进行存储
		if (!flag) {
			req.user.magicBoxes.push({
				moduleTitle: newModule,
				moduleIcon: 'http://blogs.xiaohai-hx.cn/view-default/icon/%E9%A3%8E%E8%BD%A6.svg',
			})

			req.user.save()
				.then(() => {
					res.status(200).json({
						msg: '新模块添加成功',
					})
				})
				.catch(() => {
					res.status(201).json({
						msg: '新模块添加失败，请重新尝试或联系管理员处理！'
					})
				})
		} else {
			// 不是新模块（但其实不用检查，因为前端发送过来的数据需要先进行查验一遍）
			res.status(201).json({
				msg: '该模块已存在！'
			})
		}


	} catch (err) {
		next(err);
	}
}