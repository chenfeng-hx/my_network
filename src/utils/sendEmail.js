/**
 * 当前代码编辑信息:
 *     由用户 chenfeng 使用 WebStorm 在 “server” 中
 *     于 2023-07-20 12:11:10 编写而成！
 *     祝你食用愉快！！！
 */

/**
 * 该文件用于通过邮箱向用户发送验证码等内容
 */

// 引入邮箱插件
const { createTransport } = require('nodemailer')
// 引入验证码生成器
const { getCryptoCode } = require('./verificationCode')

exports.sendEmails = async Info => {
	try {
		// 生成邮箱验证码
		const verificationCode = getCryptoCode(Info);

		// 创建一个 SMTP 传输实例
		let transporter = createTransport({
			service: "163",    // 使用的邮件服务提供商
			auth: {
				user: 'chenfeng_worker@163.com',    // 发送者邮箱
				pass: 'TAVNSMQHMJUCFYDI',         // 邮箱密码
			}
		})

		// 发送的邮件的相关信息
		let message = {
			from: "chenfeng_worker@163.com",      // 发送者邮箱
			to: Info.email,     // 接收者(用户)邮箱
			subject: "邮箱验证码",       // 邮件主题
			text: `您好，感谢您注册“生活碎片”的账号，加入我们，做一个属于自己的DIY站长，这是您的验证码:${verificationCode},
			该验证码已关联您的用户名、密码及邮箱，如需在注册前修改上述信息，请重新获取验证码，谢谢！`,         // 发送的邮件内容
		}

		// 发送邮件
		await transporter.sendMail(message)
			.then(() => {
				console.log('邮件发送成功');
			})

		return verificationCode;
	} catch (e) {
		console.log('发送失败' + e.message)
	}
}
