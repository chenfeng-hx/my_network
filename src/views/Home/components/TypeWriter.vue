/**
* 当前代码编辑信息:
*     由用户 尘封 使用 WebStorm 在 “views” 中
*     于 2023/8/11 编写而成！
*     祝你食用愉快！！！
*/
<script>
import {defineComponent} from 'vue'
import { getShortSentence } from "@/api/other";

export default defineComponent({
	name: "TypeWriter",
	data() {
		return {
			text: '2023年，喜迎新春，玉兔吉祥',
			writeSpeed: 200,
			deleteSpeed: 200,
			isDelete: false,
			index: 0,
			sentence: '',
		}
	},
	methods: {
		// 打字效果
		typeWriter() {
			// 打字
			if (!this.isDelete) {
				this.sentence += this.text[this.index];
				this.$refs.typeWriter.textContent = this.sentence.trim();
				this.index++;
				// 最后一个字打完
				if (this.index === this.text.length) {
					this.isDelete = true;
					// 调用删字方法
					setTimeout(this.deleteWord, 2000);
				} else {
					// 打字的时延
					setTimeout(this.typeWriter, this.writeSpeed);
				}
			}
		},
		// 删字效果
		deleteWord() {
			if (this.isDelete) {
				// 删字
				this.sentence = this.sentence.substring(0, this.sentence.length - 1);
				this.$refs.typeWriter.textContent = this.sentence.trim();
				// 说明已经减完了最后一个字符
				if (this.sentence.length === 0) {
					this.index = 0;
					this.isDelete = false;
					// 当删完最后一个字后请求新的句子
					setTimeout(this.changeText, 2000);
				} else {
					setTimeout(this.deleteWord, this.deleteSpeed);
				}
			}
		},
		// 初始化数据
		init() {
			this.index = 0;
			this.isDelete = false;
			this.sentence = '';
			if (this.$refs.typeWriter !== undefined) {
				this.$refs.typeWriter.textContent = '';
			}
		},
		// 点击文字容器更换内部文字
		changeText() {
			// 获取短句数据
			getShortSentence().then(res => {
				// 还原数据至初始化状态
				this.init();
				// 存储获取到的短句
				this.text = res.data.hitokoto;
				// 进行打字
				this.typeWriter();
			})
		}
	},
	// 挂载时执行函数
	mounted() {
		this.typeWriter();
	},
})
</script>

<template>
	<div class="container">
		<!-- 打字机效果组件 -->
		<!--背景展示文字-->
		<div class="top">
			<!--描述性文字-->
			<div class="show-text">
				<p>想要一个舒服的小窝吗</p>
				<p>来就对了！！！</p>
				<!--自动打字机效果实现-->
				<div class="machine" @click="changeText">
					<h3 ref="typeWriter"></h3>
					<span> | </span>
				</div>
			</div>
		</div>
		<!-- 向下动画的箭头 -->
		<h3 class="down"><img src="@/assets/icon_font/向下占行.svg" alt=""></h3>
	</div>

</template>

<style scoped lang="less">
.container {
	.top {
		position: relative;
		width: 100%;
		height: 750px;
		display: flex;
		flex-direction: column;
		.show-text {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			margin: auto;
			text-align: center;
			font-size: 25px;
			align-items: center;

			p {
				margin-bottom: 10px;
				user-select: none;
			}
			.machine {
				width: auto;
				height: 45px;
				border-radius: 8px;
				background-color: rgba(3, 3, 3, 0.5);
				margin-top: 10px;
				padding: 2px 10px;
				font-size: 26px;
				color: #FFF;
				font-weight: bold;
				text-align: center;
				line-height: 45px;
				display: flex;
				justify-content: center;
				align-content: center;
				user-select: none;
				cursor: pointer;

				h3 {
					width: auto;
					margin-right: 5px;
				}

				span {
					color: #FFFFFF;
					animation: fade .5s infinite;
				}
			}

		}
	}
}

@keyframes fade {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}


.down {
	animation: down 1s infinite;
	display: flex;
	justify-content: center;
	align-content: center;
	user-select: none;

	img {
		width: 40px;
	}
}

@keyframes down {
	from {
		transform: translateY(0);
	}
	to {
		transform: translateY(50px);
	}
}
</style>