<script>
/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023/8/21 编写而成！
 *     祝你食用愉快！！！
 */


</script>

<template>
	<!-- 跳动音符 -->
	<div class="music active">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</template>

<style scoped lang="less">
* {
	margin: 0;
	padding: 0;
}

.music {
	width: 50px;
	height: 1px;
	margin: 100px auto;
	position: relative;
}

.music div {
	width: 4px;
	height: 5px;
	position: absolute;
	bottom: 0;
	background-color: #333;
}

.music div:nth-of-type(1) {
	left: 0;
}

.music div:nth-of-type(2) {
	left: 8px;
}

.music div:nth-of-type(3) {
	left: 16px;
}

.music div:nth-of-type(4) {
	left: 24px;
}

.music div:nth-of-type(5) {
	left: 32px;
}

.music div:nth-of-type(6) {
	left: 40px;
}

.music.active div:nth-of-type(1) {
	animation: wave 0.66s linear infinite;
}

.music.active div:nth-of-type(2) {
	animation: wave 0.8s linear infinite;
}

.music.active div:nth-of-type(3) {
	animation: wave 0.7s linear infinite;
}

.music.active div:nth-of-type(4) {
	animation: wave 0.5s linear infinite;
}

.music.active div:nth-of-type(5) {
	animation: wave 0.9s linear infinite;
}

.music.active div:nth-of-type(6) {
	animation: wave 1.2s linear infinite;
}


@keyframes wave {
	0% {
		height: 8px
	}

	50% {
		height: 32px
	}

	100% {
		height: 12px
	}
}
/*
作者：咖妃
链接：https://juejin.cn/post/7105411826556338207
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/
</style>