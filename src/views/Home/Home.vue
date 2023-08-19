<template>
	<div class="container">
		<!-- 注释 -->
		<type-writer />
		<Wave />
	</div>
</template>

<script>
/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “my-network” 中
 *    于 2023-03-25 16:57:08 编写而成！
 *    祝你食用愉快！！！
 */
import { defineComponent } from "vue";
import typeWriter from "@/views/Home/components/TypeWriter.vue";
import Wave from "@/components/Wave.vue";

export default defineComponent({
	// 主页面
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Home",
	data() {
		return {


		}
	},
	computed: {

	},
	methods: {

	},
	components: {
		Wave,
		typeWriter,
	}

})
</script>

<style scoped lang="less">

</style>