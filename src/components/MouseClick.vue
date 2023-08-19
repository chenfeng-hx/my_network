/**
* 当前代码编辑信息:
*     由用户 尘封 使用 WebStorm 在 “views” 中
*     于 2023/8/12 编写而成！
*     祝你食用愉快！！！
*/
<script>
import {defineComponent} from "vue";
export default defineComponent({
	// 主页面
	name: "MouseClick",
	data() {
		return {
			words: ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'],
		}
	},
	methods: {
		createWord(e) {
			const word = document.createElement('div');
			word.id = 'word';
			const x = e.clientX;
			const y = e.clientY;
			// console.log({x, y});
			const index = Math.floor(Math.random() * this.words.length);
			// console.log(index);
			word.style.top = `${y - 15}px`;
			word.style.left = `${x - 23}px`;
			word.textContent = this.words[index];
			word.addEventListener('animationend', function() {
				word.parentNode.removeChild(word);
			})
			word.textContent = this.words[index];
			document.body.appendChild(word)
		}
	},
	mounted() {
		document.body.addEventListener('click', this.createWord);
		document.body.addEventListener('contextmenu', this.createWord);
	},
	beforeDestroy() {
		document.body.removeEventListener('click', this.createWord);
		document.body.removeEventListener('contextmenu', this.createWord);
	}
})



</script>

<template>
	<div class="word-container" style="display: none">

	</div>
</template>

<style lang="less">
#word {
	width: 46px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	position: absolute;
	user-select: none;
	color: red;
	font-weight: 650;
	animation: fade 1.5s;
	z-index: 999;
}

@keyframes fade {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
		transform: translateY(-100px);
	}
}
</style>