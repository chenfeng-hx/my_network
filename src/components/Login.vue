/**
* 当前代码编辑信息:
*     由用户 尘封 使用 WebStorm 在 “views” 中
*     于 2023/8/13 编写而成！
*     祝你食用愉快！！！
*/
<script>
import {defineComponent} from 'vue'
import { userLogin, getVerifyCode, userRegister } from "@/api/base/user";
import {errorsHandler} from "@/untils/errorsHandler";
import {message} from "@/untils/message";

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Login",
	data() {
		return {
			// 注册表单
			registerForm: {
				username: '',
				password: '',
				email: '',
				verificationCode: '',
			},
			// 登录表单
			loginForm: {
				username: '',
				password: '',
			},
		}
	},
	methods: {
		// 用户登录
		login() {
			userLogin(this.loginForm).then(res => {
				// 说明有问题
				if (res.data.errors) {
					// 得到错误原因
					const errors = errorsHandler(res.data.errors);
					this.$refs.top5.innerText = errors.username || '';
					this.$refs.top6.innerText = errors.password || '';
				} else {
					// 没有问题了
					this.$refs.top5.innerText = '';
					this.$refs.top6.innerText = '';
					// 存储 token
					this.$store.commit('setToken', res.data.token);
					// 触发回调事件改变父组件的状态
					this.$emit('loginSuccess');
					// 系统通知
					message(this, res.data.msg);
				}
			}).catch(err => {
				console.log(err.message);
			})
		},
		// 用户注册
		register() {
			// 创建表单
			const formData = new FormData();
			formData.append('username', this.registerForm.username);
			formData.append('password', this.registerForm.password);
			formData.append('email', this.registerForm.email);
			formData.append('verificationCode', this.registerForm.verificationCode);
			// 发送请求
			userRegister(formData).then(res => {
				console.log(res.data);
				if (res.data.errors) {
					const errors = errorsHandler(res.data.errors);
					this.$refs.top1.innerText = errors.username || '';
					this.$refs.top2.innerText = errors.password || '';
					this.$refs.top3.innerText = errors.email || '';
					this.$refs.top4.innerText = errors.verificationCode || '';
				} else {
					this.$refs.top1.innerText = '';
					this.$refs.top2.innerText = '';
					this.$refs.top3.innerText = '';
					this.$refs.top4.innerText = '';
					// 向用户提示注册情况
					message(this, res.data.msg);
					// 切换为登录页
					this.signIn();
				}
			})
		},
		// 用获取验证码
		getVerificationCode() {
			// 创建表单
			const formData = new FormData();
			formData.append('username', this.registerForm.username);
			formData.append('password', this.registerForm.password);
			formData.append('email', this.registerForm.email);
			// 发送请求
			getVerifyCode(formData).then(res => {
				// 出现问题
				console.log(res.data);
				if (res.data.errors) {
					const errors = errorsHandler(res.data.errors);
					this.$refs.top1.innerText = errors.username || '';
					this.$refs.top2.innerText = errors.password || '';
					this.$refs.top3.innerText = errors.email || '';
				} else {
					this.$refs.top1.innerText = '';
					this.$refs.top2.innerText = '';
					this.$refs.top3.innerText = '';
					// 问题解决,给用户发送消息
					message(this, res.data.msg);
				}
			})
		},
		// 添加 animation 动画
		signUp() {
			this.$refs.container.classList.add("right-panel-active");
		},
		signIn() {
			this.$refs.container.classList.remove("right-panel-active");
		},


	},

})
</script>

<template>
	<!-- 用户登录/注册 -->
	<div class="container" id="container" ref="container">
		<!-- 注册账号 -->
		<div class="form-container sign-up-container">
			<form>
				<h1>注册账号</h1>
				<input type="text" placeholder="用户名" v-model="registerForm.username" />
				<div class="errInfo top1" ref="top1"></div>
				<input type="password" placeholder="密码" v-model="registerForm.password" />
				<div class="errInfo top2" ref="top2"></div>
				<input type="email" placeholder="邮箱" v-model="registerForm.email" />
				<div class="errInfo top3" ref="top3"></div>
				<div class="verify">
					<input type="number" placeholder="验证码" v-model="registerForm.verificationCode">
					<button type="button" @click="getVerificationCode">获取验证码</button>
					<div class="errInfo top4" ref="top4"></div>
				</div>
				<button type="button" ref="signUpButton" style="margin-top: 10px;" @click="register">注册</button>
			</form>
		</div>
		<!-- 登录账号 -->
		<div class="form-container sign-in-container">
			<form action="#">
				<h1>登录</h1>
				<div class="social-container">
					<a href="#" class="social"><img src="@/assets/icon_font/微信.svg" alt=""></a>
					<a href="#" class="social"><img src="@/assets/icon_font/github.svg" alt=""></a>
					<a href="#" class="social"></a>
				</div>
				<span>or use your account</span>
				<input type="text" placeholder="用户名/邮箱/手机号" v-model="loginForm.username" />
				<div class="errInfo top5" ref="top5"></div>
				<input type="password" placeholder="密码" v-model="loginForm.password" />
				<div class="errInfo top6" ref="top6"></div>
				<a href="#">忘记密码?</a>
				<button type="button" ref="signInButton" @click="login">登录</button>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-left">
					<h1>你好, 朋友!</h1>
					<p>注册你的个人信息，加入我们，做个DIY站长！</p>
					<button class="ghost" id="signIn" @click="signIn">登录</button>
				</div>
				<div class="overlay-panel overlay-right">
					<h1>欢迎回来!</h1>
					<p>要常保持联系呀~</p>
					<button class="ghost" id="signUp" @click="signUp">注册</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">

* {
	box-sizing: border-box;
}

h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	cursor: pointer;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 15px 0;
	width: 100%;
}

.verify {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	button {
		width: 30%;
		padding: 12px 2px;
		border-radius: 5px;
		margin-left: 10px;
	}
}

input[type='number'] {
	width: 65%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.errInfo {
	color: red;
	position: absolute;
	top: 190px;
	left: 55px;
}

.top1 {
	top: 147px;
}

.top2 {
	top: 218px;
}

.top3 {
	top: 288px;
}

.top4 {
	top: 361px;
}

.top5 {
	top: 250px;
}

.top6 {
	top: 318px;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}

	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

.social-container a img {
	width: 30px;
}

footer {
	background-color: #222;
	color: #fff;
	font-size: 14px;
	bottom: 0;
	position: fixed;
	left: 0;
	right: 0;
	text-align: center;
	z-index: 999;
}

footer p {
	margin: 10px 0;
}

footer i {
	color: red;
}

footer a {
	color: #3c97bf;
	text-decoration: none;
}
</style>