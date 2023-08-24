/**
* 当前代码编辑信息:
*     由用户 尘封 使用 WebStorm 在 “views” 中
*     于 2023/8/24 编写而成！
*     祝你食用愉快！！！
*/
<script>
import {defineComponent} from 'vue'

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Pager",
	props: {
		// 总的页数
		totalPages: {
			type: Number,
			required: true,
			min: 1,
		}
	},
	data() {
		return {
			// 激活状态
			isActive: 1,
			// 左箭头
			leftArrow: false,
			// 右箭头
			rightArrow: true,
			// 前面渲染的数量
			prevNums: 3,
			// 后面渲染的数量
			nextNums: 2,
			// 后面的省略号
			nextDot: false,
			before: 3,
			middle: 4,
			after: 5,
		}
	},
	methods: {
		// 对分页器的基础处理
		pagerHandler() {
			// 首先需要对左右箭头进行处理
			// 只有一页时关闭箭头
			if (this.totalPages < 2) {
				this.leftArrow = false;
				this.rightArrow = false;
			}
			//
		},
		/**
		 * 激活状态的切换(将左右箭头的逻辑放在一起)
		 * @param currentIndex Number 当前的分页item的位置
		 */
		changeActive(currentIndex) {
			// 每次改变位置的时候需要判断一下左右箭头是否需要展示
			// if (this.is)
			// 改变当前的激活位置
			if (currentIndex < 1 || currentIndex > this.totalPages) return;
			if (currentIndex - 1 >= 2) {
				this.nextDot = true;
				this.prevNums = 1;
				// 改变中间的数字 因为从前面打开和从后面打开是不一样的
				this.before = currentIndex;
				this.middle = currentIndex + 1;
				this.after = this.middle + 1;
			} else {
				this.nextDot = false;
				this.prevNums = 3;
			}
			if (this.totalPages - currentIndex <= 2) {
				this.nextDot = false;
				this.nextNums = 4;
			} else {
				this.nextNums = 2;
			}
			this.isActive = currentIndex;
			this.leftArrow = this.isActive > 1;
			this.rightArrow = this.isActive < this.totalPages;

		}
	},
	mounted() {
		this.pagerHandler();

	}

})
</script>

<template>
	<div class="pager-container">
		<div class="page-box" v-if="leftArrow" @click="changeActive(--isActive)"><img src="@/assets/icon_font/左箭头.svg" alt=""></div>
		<div class="page-box" v-for="num in prevNums" :key="num" :class="{ active: isActive === num }" @click="changeActive(num)">{{ num }}</div>
		<div class="page-box">...</div>
		<template v-if="nextDot">
			<div class="page-box" :class="{ active: isActive === before }" @click="changeActive(before)" >{{ before }}</div>
			<div class="page-box" :class="{ active: isActive === middle }" @click="changeActive(middle)" >{{ middle }}</div>
			<div class="page-box" :class="{ active: isActive === after }" @click="changeActive(after)" >{{ after }}</div>
			<div class="page-box">...</div>
		</template>
		<div class="page-box" v-for="num in nextNums" :key="totalPages - nextNums + num" :class="{ active: isActive === totalPages - nextNums + num }" @click="changeActive(totalPages - nextNums + num)">{{ totalPages - nextNums + num }}</div>
		<div class="page-box" v-if="rightArrow" @click="changeActive(++isActive)"><img src="@/assets/icon_font/右箭头.svg" alt=""></div>
	</div>
</template>

<style scoped lang="less">
/* 分页器总体 */
.pager-container {
	width: 50%;
	height: 4%;
	position: absolute;
	bottom: 1.5%;
	left: 23%;
	display: flex;
	justify-content: center;
	align-items: center;
}

/* 分页器盒子 */
.page-box {
	width: 7%;
	height: 62%;
	background-color: #fff;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	cursor: pointer;
	transition: all .3s linear;
	animation: fadeIn .3s;

	&:hover	{
		transform: scale(1.2);
	}

	&:not(&:last-of-type) {
		margin-right: 10px;
	}

	&.active {
		background-color: grey;
	}

	img {
		width: 25px;
	}
}





</style>