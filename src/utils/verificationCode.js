/**
 * 当前代码编辑信息:
 *     由用户 chenfeng 使用 WebStorm 在 “server” 中
 *     于 2023-07-20 12:16:28 编写而成！
 *     祝你食用愉快！！！
 */

/**
 * 生成验证码
 * 生成思路如下：
 *  	1. 将用户名、邮箱、密码相连，并进行
 */

const crypto = require('crypto')

exports.getCryptoCode = Info => {
	// 原始文本(待加密)
	let str = Info.username + Info.email + Info.password;

	// 此处应该先 hash 一次， 后续再进行一次 hash
	const strHash = crypto.createHash('md5').update(str).digest('hex');     // length: 32

	// 使用 AES 对信息进行加密处理
	// 1. 基本的加密条件
	const algorithm = 'aes-256-cbc';   // AES 算法及加密模式
	const key = 'hxxhzhn6250215678ChenFengXIaoHai';    // 密钥，必须为 32 个字符（256bit）
	const IV = "hxxhzhn0215678cf";          // 初始向量，必须为 16 个字符（128bit）

	// 2. 创建加密器
	const cipher = crypto.createCipheriv(algorithm, key, IV);

	// 3. 加密
	let encryptedText = cipher.update(strHash, 'hex', 'hex');
	encryptedText += cipher.final('hex');    // length: 64

	// // 4. 解密
	// // 创建解密器
	// let decipher = crypto.createDecipheriv(algorithm, key, IV);
	//
	// // 解密
	// let decryptedText = decipher.update(encryptedText, 'hex', 'utf8');
	// decryptedText += decipher.final('utf8');

	// 使用 md5 算法对加密后的信息生成 hash 值
	let hash = crypto.createHash('md5').update(encryptedText).digest('hex');   // length: 32

	// 截取得到的 hash 值
	// 1. 判断 str 和 hash 的长度,确定切取长度的位置
	let sliceIndex = str.length >= hash.length ? str.length % hash.length : str.length;
	// console.log(sliceIndex);
	// 2. 进行截取
	let sliceText = "";
	// 长度足够的情况
	if (hash.length - 1 > sliceIndex + 6)  {
		sliceText = hash.slice(sliceIndex, sliceIndex + 5);
	} else {
		// 长度不足的情况下，先截取后半段，再从头开始截取
		sliceText = hash.slice(sliceIndex, hash.length - 1);
		// console.log(sliceText);
		sliceText += hash.slice(0, 6 - (hash.length - 1 - sliceIndex));
		// console.log(sliceText);
	}

	// 对 hash 值进行处理得到数字验证码
	let verificationCode = "";
	for (let i = 0; i < sliceText.length; i++) {
		let ascCode = sliceText.charCodeAt(i);
		if ((ascCode >= 65 && ascCode <= 90) || (ascCode >= 96 && ascCode <= 122)) {
			verificationCode += ascCode % 10;
		} else {
			verificationCode += sliceText[i];
		}
	}
	// console.log(verificationCode);
	return verificationCode;

}

// 测试 demo
// getCryptoCode({
// 	username: 'cheng',
// 	password: 'hxxhz',
// 	email: "m1373951541@163.com"
// })