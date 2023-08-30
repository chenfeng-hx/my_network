/**
 * 当前代码编辑信息: 连接七牛云对象存储并上传文件
 *     由用户 尘封 使用 WebStorm 在 “server” 中
 *     于 2023-08-05 11:14:04 编写而成！
 *     祝你食用愉快！！！
 */


/* 下面的是一些基本的配置 */
// 引入七牛云 SDK
const qiNiu = require('qiniu')
// 引入固定常量
const { accessKey, secretKey, bucket, preUrl } = require('../config/base-variable')
const {reject} = require("nodemailer/.ncurc");

// 构建鉴权对象
const mac = new qiNiu.auth.digest.Mac(accessKey, secretKey);

// 生成上传凭证
const options = {
	scope: bucket,
}

const putPolicy = new qiNiu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

// 构建配置类
const config = new qiNiu.conf.Config();
// 设置空间对应的机房(华北地区)
config.zone = qiNiu.zone.Zone_z1;
// 上传是否使用 cdn 加速
config.useCdnDomain = true;

// 创建上传器
const formUploader = new qiNiu.form_up.FormUploader(config);
const putExtra =  new qiNiu.form_up.PutExtra();

// 上传图片
// const localFile = './ni.mp3';

// 设置图片在七牛的存储名字
// const key = 'server-default/ni.mp3';

// 资源管理相关操作首先要构建 BucketManager 对象
// const bucketManager = new qiNiu.rs.BucketManager(mac, config);

// 上传
// formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr, respBody, respInfo) {
// 	if (respErr) {
// 		throw respErr;
// 	}
//
// 	if (respInfo.statusCode === 200) {
// 		// bucketManager.stat(bucket, key, (err, respBodys, respInfos) => {
// 		// 	if (err) {
// 		// 		console.log(err);
// 		// 		return;
// 		// 	}
// 		//
// 		// 	if (respInfos.statusCode === 200) {
// 		// 		const url = bucketManager.privateDownloadUrl(respBodys.bucket, key);
// 		// 		console.log(url);
// 		// 	}
// 		// })
// 		console.log('上传成功');
// 		console.log(respBody);
// 	} else {
// 		console.log(respInfo.statusCode);
// 		console.log(respBody);
// 	}
// })
// 实际上是 外链地址 + 保存在 cloud 上的图片名称 key
// http://blogs.xiaohai-hx.cn/server-default/images.jpg

/* 具体导出的方法 */

/**
 * 上传新文件到七牛云(适用于所有的文件)
 * @param Info.path String 具体上传到七牛云的文件路径
 * @param Info.name String 具体上传到七牛云的文件名称
 * @param Info.buffer Buffer 具体上传到七牛云的文件内容
 * @returns {Promise<unknown>} 成功返回外链地址，失败返回错误原因
 */
exports.upLoadNewFile = Info => {
	return new Promise((resolve, reject) => {
		const key = Info.path + Info.name;
		const fileData = {
			buffer: Buffer.from(Info.buffer),
		}
		// 上传
		formUploader.put(uploadToken, key, fileData.buffer, putExtra, (respErr, respBody, respInfo) => {
			if (respErr) reject(respErr);

			if (respInfo.statusCode === 200) {
				console.log('上传成功');
				console.log(respBody);
				resolve(preUrl + key);
			} else {
				console.log(respInfo.statusCode);
				console.log(respBody);
				reject(respInfo.statusCode + respBody);
			}
		})
	})
}

// 修改已上传的文件
exports.changeUploadFile = Info => {

}


