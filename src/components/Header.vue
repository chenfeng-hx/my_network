<template>
	<!-- 注释 -->
	<div class="maxHeader">
		<!--logo-->
		<div class="title">生活碎片</div>
		<!--搜索框-->
		<div class="search">
			<input type="text" name="search" id="search" placeholder="请输入搜索信息..." v-model.trim="searchInfo">
			<button type="button" id="search_btn" @click="sendValue">
				<img src="../assets/icon_font/sousuo.svg" alt="">
			</button>
		</div>
		<!--专栏导航-->
		<div class="toNav">
			<ul class="others">
				<li v-for="item in topBarData" :key="item.id">
					<span><img :src="require('../assets/icon_font/'+item.icon)"></span>
					<span>{{ item.label }}</span>
				</li>
			</ul>
			<!--个人中心-->
			<div class="advator">
				<img src="../assets/images/advanter.jpg" alt="">
			</div>
		</div>
	</div>
</template>

<script>
import "@/assets/icon_font/首页.svg"
/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “my-network” 中
 *    于 2023-03-25 17:09:19 编写而成！
 *    祝你食用愉快！！！
 */
export default {
	name: "Header",
	data() {
		return {
			topBarData: [
				{
					label: '首页',
					icon: '房子.svg',
					path: '/home',
				},
				{
					label: '自习室',
					icon: 'shuji.svg',
					path: '/class',
				},
				{
					label: '非礼勿言',
					icon: 'huati.svg',
					path: '/msgBoard',
				},
				{
					label: '曲乐',
					icon: 'erjiB.svg',
					path: '/music',
				},
				{
					label: '百宝箱',
					icon: 'shubao.svg',
					path: '/magicBox',
				},
				{
					label: '关于',
					icon: 'xinxi.svg',
					path: '/about',
				}
			],
			searchInfo: '',
		}
	},
	methods: {
		sendValue() {
			console.log(this.searchInfo);
			this.searchInfo = '';
		}
	}
}
</script>

<style scoped lang="less">
@import "src/style/mixin/clear";
.maxHeader {
	z-index: 2;
	position: fixed;
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	&:hover {
		background-color: rgba(3, 3, 3, 0.5);
	}
	.title {
		position: relative;
		top: 12px;
		left: 22px;
		font-size: 20px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
	}
	.search {
		position: relative;
		input {
			position: relative;
			top: 5px;
			width: 260px;
			height: 35px;
			border-radius: 5px;
			border: 2px solid #444444;
			background-color: transparent;
			&::placeholder {
				color: #333333;
			}
			&:focus::placeholder {
				color: #FFFFFF;
			}
		}
		button {
			position: relative;
			top: 11px;
			width: 40px;
			height: 35px;
			background-color: transparent;
			cursor: pointer;
			img {
				width: 25px;
				height: 25px;
			}
		}
	}
	.toNav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		right: 40px;
		.others {
			li {
				float: left;
				margin-right: 20px;
				cursor: pointer;
				img {
					width: 25px;
					height: 25px;
					vertical-align: -5px;
				}
				span {
					&:last-of-type {
						margin-left: 3px;
						font-size: 15px;
						line-height: 1.5;
					}
				}
			}
		}
		.advator {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			overflow: hidden;
			margin-left: 15px;
			cursor: pointer;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}

}
</style>