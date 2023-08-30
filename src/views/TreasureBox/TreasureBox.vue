<script>
/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023/8/24 编写而成！
 *     祝你食用愉快！！！
 */

import {saveModule, saveWebsite, getWebsite} from "@/api/base/magicBox";
import {errorsHandler} from "@/untils/errorsHandler";
import { message } from "@/untils/message";
import {mapGetters} from "vuex";

export default {
	name: 'TreasureBox',
	data() {
		return {
			// 增加网址弹出框是否展示
			addDialog: false,
			// 图片是否上传成功
			uploadSuccess: false,
			// 网站标题
			websiteTitle: '',
			// 网站URL
			websiteURL: '',
			// 网站简介
			websiteBio: '',
			// 上传的网址图片
			websiteImg: null,
			// 网址所要加入的模块
			modules: [],
			// 用户所原有的模块(通过 props 参数接收而来)
			user_modules: [],
			// 新加入的模块
			newModule: '',
			// 是否新加了模块
			isNewAdd: false,
			// 锚点模块
			points: {},
		}
	},
	computed: {
		...mapGetters(['username']),
	},
	watch: {
		// 监视store中用户名的变化，如果登录成功则继续发送请求
		username: function (value) {
			if (value !== '') {
				this.getMagicBoxes();
			}
		}
	},
	methods: {
		// 图片预览
		upload(event) {
			// 获取上传文件
			const file = event.target.files[0];
			// 传递文件到变量中上传文件
			this.websiteImg = file;
			// 创建 FileReader 对象
			const reader = new FileReader();
			// 当文件加载完成时触发的回调函数
			reader.onload = e => {
				// 清空原有的内部结构
				this.$refs.preview.innerHTML = '';
				// 创建一个新的图片元素
				let img = document.createElement('img');
				// 设置图片的src 属性为读取的文件的内容
				img.src = e.target.result;
				img.style = "border-radius: 10px;";
				img.style.width = "100%";
				// 将图片元素添加在预览框中
				this.$refs.preview.appendChild(img);
				this.uploadSuccess = true;
			}
			// 使用 FileReader 对象读取文件内容
			reader.readAsDataURL(file);

		},
		// 存储网址或者新的模块
		addWebsite() {
			// 前端基本验证处理
			// if (this.websiteTitle === "") {
			// 	this.$refs.top1.innerText = '网站名称不能为空！';
			// 	return;
			// }
			// if (this.websiteURL === "") {
			// 	this.$refs.top2.innerText = '网站链接不能为空！';
			// 	return;
			// }
			// if (this.websiteBio === "") {
			// 	this.$refs.top3.innerText = '网站简介不能为空！';
			// 	return;
			// }
			// if (this.modules.length === 0) {
			// 	this.$refs.top4.innerText = '请至少选择一个模块!';
			// }
			// 交由后端处理
			const formData = new FormData();
			console.log(typeof this.modules)
			formData.append('username', this.$store.state.username);
			formData.append('websiteTitle', this.websiteTitle);
			formData.append('websiteURL', this.websiteURL);
			formData.append('websiteBio', this.websiteBio);
			formData.append('file', this.websiteImg);
			formData.append('modules', this.modules);
			saveWebsite(formData).then(res => {
				console.log(res);
				if (res.data.errors) {
					// 对校验结果进行处理
					const errors = errorsHandler(res.data.errors);
					console.log(errors);
					// 如果 token 出错
					if (errors.authorization) {
						// 提示用户
						message(this, errors.authorization, 'warning');
						// 帮助用户关闭当前页面
						this.addDialog = false;
						// 打开登录页面
						this.$store.commit('setDialog', true);
					}
					this.$refs.top1.innerText = errors.websiteTitle || '';
					this.$refs.top2.innerText = errors.websiteURL || '';
					this.$refs.top3.innerText = errors.websiteBio || '';
					this.$refs.top4.innerText = errors.modules || '';
					this.$refs.top5.innerText = errors.file || '';
					return;
				}
				// 错误处理结束
				this.$refs.top1.innerText = '';
				this.$refs.top2.innerText = '';
				this.$refs.top3.innerText = '';
				this.$refs.top4.innerText = '';
				this.$refs.top5.innerText = '';
				if (res.status === 200) {
					message(this, res.data.msg);
				} else {
					message(this, res.data.msg, 'error');
				}

			}).catch(err => {
				console.log(err.message);
			})
		},
		// 当用户勾选模块名时触发
		checkText(event, value) {
			// console.log(e.srcElement.checked);
			if (event.srcElement.checked) this.modules.push(value);
			else this.modules = this.modules.filter(item => item !== value);
		},
		// 用户增加新的模块
		addModule() {
			// 前端基础校验，减少网络请求
			if (this.newModule === '') {
				this.$refs.tip.innerText = '模块名不能为空！';
				return;
			}
			for (let item of this.user_modules) {
				console.log(item);
				if (item === this.newModule) {
					this.$refs.tip.innerText = '该模块已经存在啦！';
					return;
				}
			}
			this.$refs.tip.innerText = '';
			// 结束判空操作，剩余的校验放到后端做
			const formData = new FormData();
			formData.append('username', this.$store.state.username);
			formData.append('newModule', this.newModule);
			saveModule(formData).then(res => {
				// 对校验结果进行处理
				if (res.data.errors) {
					const errors = errorsHandler(res.data.errors);
					// 如果 token 出错
					if (errors.authorization) {
						// 提示用户
						message(this, errors.authorization, 'warning');
						// 帮助用户关闭当前页面
						this.addDialog = false;
						// 打开登录页面
						this.$store.commit('setDialog', true);
					}
					this.$refs.tip.innerText = errors.newModule || '';
					return;
				}
				// 处理接口反馈信息
				this.$refs.tip.innerText = '';
				if (res.data.msg === '新模块添加成功') {
					this.user_modules.push(this.newModule);
					this.newModule = '';
					message(this, res.data.msg);
				}
				else if (res.data.msg === '该模块已存在！') message(this, res.data.msg, 'warning');
				else message(this, res.data.msg, 'error');

			}).catch(err => {
				console.log(err.message);
			})

		},
		// 用户获取所有的百宝箱信息
		getMagicBoxes() {
			getWebsite(this.$store.state.username).then(res => {
				// 登录问题
				if (res.data.errors) {
					const errors = errorsHandler(res.data.errors);
					if (errors.authorization) {
						message(this, errors.authorization, 'warning');
						this.addDialog = false;
						this.$store.commit('setDialog', true);
					}
				}
				// 得到数据
				this.user_modules = res.data.data;
				// 整理锚点数据
				for (let key in this.user_modules) {
					this.points[key] = [];
					if (this.user_modules[key].length) {
						for (let i = 0; i < this.user_modules[key].length; i++) {
							this.points[key].push(this.user_modules[key][i].websiteTitle);
						}
					}
				}
				console.log(this.points);
			}).catch(err => {
				console.log('getMagicBoxes', err.message);
			})
		},
		// 折叠面板点击事件
		changeClass(event) {
			console.log('发生了');
			event.target.nextElementSibling.classList.toggle('active')
		}
	},
	created() {
		this.getMagicBoxes();
	},
	mounted() {
		document.body.setAttribute('route-bg', 'magic-box')
	}
}

</script>

<template>
	<!-- 百宝箱 -->
	<div class="container">
		<!-- 百宝箱主体 -->
		<div class="max-box">
			<!-- 每一个模块 -->
			<div class="module" v-for="(Info, module) in user_modules" :key="module">
				<!-- 模块名称 -->
				<div class="top">
					<img src="@/assets/icon_font/风车.svg" alt="">
					<!-- 定位标志 -->
					<h3 :id="module">{{ module }}</h3>
					<div class="add-website" @click="addDialog = true">
						<img src="http://blogs.xiaohai-hx.cn/view-default/icon/%E5%A2%9E%E5%8A%A0.svg" alt="">
					</div>
					<div class="color-step"></div>
				</div>
				<!-- 网址 -->
				<div class="items">
					<a :href="item.websiteURL" target="_blank" class="item" v-for="item in Info" :key="item" :id="item.websiteTitle">
						<img :src="item.websiteImg" alt="">
						<div class="text"><span class="bio"><span class="title">{{ item.websiteTitle }}:</span>{{ item.websiteBio }}</span></div>
					</a>
				</div>
			</div>
		</div>
		<!-- 增加模块 -->
		<el-dialog
			title="请填写要添加的网站"
			:visible.sync="addDialog"
			width="30%"
			center>
			<form action="#">
				<input type="text" name="网站名称" placeholder="网站名称" v-model="websiteTitle">
				<div class="tops top1" ref="top1"></div>
				<input type="url" name="网站链接" placeholder="网站链接" v-model="websiteURL">
				<div class="tops top2" ref="top2"></div>
				<input type="text" name="网站简介" placeholder="网站简介,建议不超过35个字哦~" v-model="websiteBio">
				<div class="tops top3" ref="top3"></div>
				<!-- 图片上传 -->
				<div class="upload-container">
					<label class="custom-file-upload" for="file">
					<span class="icon">
						<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" :class="{ active: uploadSuccess }">
							<g stroke-width="0" id="SVGRepo_bgCarrier"></g>
							<g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
							<g id="SVGRepo_iconCarrier">
								<path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path>
							</g>
						</svg>
					</span>
						<span class="text">
						<span>点击上传图片</span>
					</span>
						<input type="file" id="file" ref="fileUpload" @change="upload">
					</label>
					<div :class="{ preview: uploadSuccess }" ref="preview"></div>
					<div class="tops top5" ref="top5"></div>
				</div>
				<!-- 添加新模块 -->
				<div class="check-container">
					<h3>请选择要将网址加入哪一个模块</h3>
					<h4 ref="top4"></h4>
					<div class="checkbox">
						<div class="check-item" v-for="item in user_modules" :key="item">
							<input type="checkbox" :id="item" @change="checkText($event, item)"><label :for="item">{{ item }}</label>
						</div>
					</div>
					<div class="add-new-module">
						<input type="text" placeholder="请输入新模块的名称" v-model="newModule">
						<div class="tip" ref="tip"></div>
						<button type="button" @click="addModule">添加</button>
					</div>
				</div>
			</form>
			<!-- 提交表单 -->
			<span slot="footer" class="dialog-footer">
				<el-button @click="addDialog = false">取 消</el-button>
				<el-button type="primary" @click="addWebsite">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 锚点 -->
		<div class="points">
			<div class="point-item" v-for="(item, key) in points" :key="key">
				<a class="title" @click="changeClass($event)" :href="`#${key}`">{{ key }}</a>
				<div class="content">
					<a class="point-module" v-for="i in item" :key="i" :href="`#${i}`">{{ i }}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
/* 总的容器 */
.container {
	width: 100%;
	min-height: 100px;
	display: flex;
	justify-content: center;
}

/* 百宝箱主体 */
.max-box {
	width: 75%;
	height: auto;
	padding: 10px;
}

/* 每一个模块 */
.module {
	margin-top: 30px;

	/* 模块名称 */
	.top {
		width: 90%;
		height: 50PX;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding: 0 10px;
		position: relative;

		img {
			width: 25px;
			animation: rotate 1s linear infinite;
		}

		h3 {
			margin-left: 10px;
			font-weight: 800;
			font-size: 23px;
			margin-top: 4px;
			color: #FFFFFF;
		}

		.color-step {
			width: 100%;
			height: 5px;
			background: linear-gradient(#FFC7EA, #D8B4F8, #CAEDFF);
			border-radius: 20px;
			margin-top: 10px;
		}

		.add-website {
			position: absolute;
			right: 30px;
			cursor: pointer;
			
			img {
				animation: none;
				&:hover {
					transition: all .3s;
					transform: scale(1.1);
				}
			}
		}
	}

	/* 网址 */
	.items {
		width: 90%;
		height: auto;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding: 10px;

		.item {
			background-color: #FFFFFF;
			width: 24%;
			// width: 28%;
			//height: 170px;
			height: 220px;
			border-radius: var(--card-border-radius);
			display: inline-flex;
			flex-direction: column;
			justify-content: start;
			overflow: hidden;
			padding: 5px;
			margin: 0 11px 11px 0;

			&:hover, &:active {
				transform: scale(1.05);
				transition: all .3s;

				img {
					transform: scale(1.05);
					transition: all .3s;
				}
			}

			img {
				border-radius: var(--card-border-radius);

				&:hover, &:active {
					transform: scale(1.05);
					transition: all .3s;
				}
			}

			.text {
				width: 100%;
				height: 38%;
				margin-top: 10px;
			}

			.title {
				font-size: 20px;
				margin-top: 5px;
				font-weight: 800;
			}

			.bio {
				font-size: 15px;
				margin-top: 8px;
				letter-spacing: 1.5px;
			}
		}
	}
}

/* 增加模块弹出框 */
[type="text"], [type='url'] {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 15px 0;
	width: 100%;
}


.check-container {
	width: 100%;
	min-height: 212px;
	border: 2px dashed #cacaca;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 8px;
	margin-top: 44px;
	padding: 10px;

	h3 {
		text-align: center;
		margin-bottom: 10px;
		font-size: 20px;
	}

	h4 {
		text-align: center;
		margin-bottom: 10px;
		color: red;
	}

	[type='checkbox'] {
		width: auto;
		margin-right: 5px;
		position: relative;
		top: 2px;
	}

	.checkbox {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 13px;
	}

	.check-item {
		position: relative;
	}

	/* 添加新模块 */
	.add-new-module {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 30px;
		position: relative;

		[type='text'] {
			width: 70%;
			margin: 0 7px 0 0;
		}

		button {
			width: 20%;
			cursor: pointer;
			transition: all 80ms ease-in;

			&:active {
				transform: scale(0.95);
			}
		}

		.tip {
			position: absolute;
			color: red;
			bottom: -18px;
			left: 23px;
		}
	}

}

.tops {
	position: absolute;
	color: red;
	left: 30px;
}

.top1 {
	top: 135px;
}

.top2 {
	top: 203px;
}

.top3 {
	top: 272px;
}

.top5 {
	left: 0;
	top: 58%;
	width: 100%;
	text-align: center;
}

.upload-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	width: 100%;
}

.preview {
	width: 50%;
	height: 200px;
	border-radius: 10px;
	border: 2px dashed #cacaca;
	background-color: rgba(255, 255, 255, 1);
	display: flex;
}

/* 锚点 */
.points {
	width: 14%;
	min-height: 100px;
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	background-color: linen;

	a {
		display: block;
	}


	.point-item {
		text-align: center;
		transition: flex-grow .3s;
		position: relative;
	}

	.title {
		background-color: rgb(150, 181, 183);
		color: rgb(4, 43, 46);
		height: 44px;
		line-height: 44px;
		border-top: rgb(125, 157, 160) solid 1px;
		cursor: pointer;
	}

	.point-module {
		width: 100%;
		background: red;
		height: 35px;
		line-height: 35px;
		cursor: pointer;
		transition: all 1s;
	}

	.active {
		max-height: 0;
	}

	.content {

	}
}

/* 文件上传 */
.custom-file-upload {
	height: 200px;
	//width: 300px;
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	border: 2px dashed #cacaca;
	background-color: rgba(255, 255, 255, 1);
	padding: 1.5rem;
	border-radius: 10px;
	box-shadow: 0 48px 35px -48px rgba(0, 0, 0, 0.1);
}

.custom-file-upload .icon {
	display: flex;
	align-items: center;
	justify-content: center;
}

.custom-file-upload .icon svg {
	height: 80px;
	fill: rgba(75, 85, 99, 1);

	&.active {
		fill: green;
	}
}

.custom-file-upload .text {
	display: flex;
	align-items: center;
	justify-content: center;
}

.custom-file-upload .text span {
	font-weight: 400;
	color: rgba(75, 85, 99, 1);
}

.custom-file-upload input {
	display: none;
}



</style>