<script>
/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023/8/14 编写而成！
 *     祝你食用愉快！！！
 */

import { defineComponent } from "vue";

export default defineComponent({
	name: "RightClickMenu",
	methods: {
		// 阻止鼠标右键的默认事件并弹出该窗口
		preventRightClick(event) {
			// 阻止默认的右键事件
			event.preventDefault();
			// 如果第二次也是使用右键点击但是换地方的话，应该先将菜单隐藏然后再显示
			this.hideMenu();
			// 获取当前的鼠标坐标
			const x = event.clientX;
			const y = event.clientY;
			const scrollTop = document.documentElement.scrollTop;
			// 为菜单赋值显示坐标
			this.$refs.container.style.top = y + scrollTop + 'px';
			this.$refs.container.style.left = x + 'px';
			this.$refs.container.style.display = "block";
		},
		// 使组件消失
		hideMenu() {
			this.$refs.container.style.display = "none";
		}
	},
	mounted() {
		document.body.addEventListener('contextmenu', this.preventRightClick);
		document.body.addEventListener('click', this.hideMenu);
	},
	beforeDestroy() {
		document.body.removeEventListener('contextmenu', this.preventRightClick);
		document.body.removeEventListener('click', this.hideMenu);
	}
})

</script>

<template>
	<!-- 右键菜单 -->
	<div class="container"  ref="container" style="display: none">
		<div class="menu">
			<ul class="menu-list">
				<li class="menu-item"><button class="menu-button"><i data-feather="corner-up-right"></i>Share</button></li>
				<li class="menu-item"><button class="menu-button"><i data-feather="edit-2"></i>Rename</button></li>
			</ul>
			<ul class="menu-list">
				<li class="menu-item"><button class="menu-button menu-button--black"><i data-feather="circle"></i>No status<i data-feather="chevron-right"></i></button>
					<ul class="menu-sub-list">
						<li class="menu-item"><button class="menu-button menu-button--orange"><i data-feather="square"></i>Needs review</button></li>
						<li class="menu-item"><button class="menu-button menu-button--purple"><i data-feather="octagon"></i>In progress</button></li>
						<li class="menu-item"><button class="menu-button menu-button--green"><i data-feather="triangle"></i>Approved</button></li>
						<li class="menu-item"><button class="menu-button menu-button--black menu-button--checked"><i data-feather="circle"></i>No status<i data-feather="check"></i></button></li>
					</ul>
				</li>
				<li class="menu-item"><button class="menu-button"><i data-feather="link"></i>Copy Link Address</button></li>
				<li class="menu-item"><button class="menu-button"><i data-feather="folder-plus"></i>Move to</button></li>
				<li class="menu-item"><button class="menu-button"><i data-feather="copy"></i>Copy to</button></li>
				<li class="menu-item"><button class="menu-button"><i data-feather="lock"></i>Make Private</button></li>
				<li class="menu-item"><button class="menu-button"><i data-feather="download"></i>Download</button></li>
			</ul>
			<ul class="menu-list">
				<li class="menu-item"><button class="menu-button menu-button--delete"><i data-feather="trash-2"></i>Delete</button></li>
			</ul>
		</div>
	</div>
</template>

<style scoped lang="less">
*,
*:after,
*:before {
	box-sizing: border-box;
}

body {
	font-family: "Inter", sans-serif;
	background-color: var(--color-bg-primary);
	color: var(--color-text-primary);
}

.menu {
	display: flex;
	flex-direction: column;
	background-color: var(--color-bg-secondary);
	border-radius: 10px;
	box-shadow: 0 10px 20px rgba(#404040, 0.15);
}

.menu-list {
	margin: 0;
	display: block;
	width: 100%;
	padding: 8px;
	& + .menu-list {
		border-top: 1px solid #ddd;
	}
}
.menu-sub-list {
	display: none;
	padding: 8px;
	background-color: var(--color-bg-secondary);
	border-radius: 10px;
	box-shadow: 0 10px 20px rgba(#404040, 0.15);
	position: absolute;
	left: 100%;
	right: 0;
	z-index: 100;
	width: 100%;
	top: 0;
	flex-direction: column;
	&:hover {
		display: flex;
	}
}

.menu-item {
	position: relative;
	cursor: pointer;
}

.menu-button {
	font: inherit;
	border: 0;
	padding: 8px 36px 8px 8px;
	width: 100%;
	border-radius: 8px;
	text-align: left;
	display: flex;
	align-items: center;
	position: relative;
	background-color: var(--color-bg-secondary);
	cursor: pointer;
	&:hover {
		background-color: var(--color-bg-primary-offset);
		& + .menu-sub-list {
			display: flex;
		}
		svg {
			stroke: var(--color-text-primary);
		}
	}
	svg {
		flex-shrink: 0;
		width: 20px;
		height: 20px;
		margin-right: 10px;
		stroke: var(--color-text-primary-offset);
		&:nth-of-type(2) {
			margin-right: 0;
			position: absolute;
			right: 8px;
		}
	}

	&--delete {
		&:hover {
			color: var(--color-red);
			svg:first-of-type {
				stroke: var(--color-red);
			}
		}
	}

	&--orange {
		svg:first-of-type {
			stroke: var(--color-orange);
		}
	}

	&--green {
		svg:first-of-type {
			stroke: var(--color-green);
		}
	}
	&--purple {
		svg:first-of-type {
			stroke: var(--color-purple);
		}
	}
	&--black {
		svg:first-of-type {
			stroke: var(--color-black);
		}
	}

	&--checked {
		svg:nth-of-type(2) {
			stroke: var(--color-purple);
		}
	}
}

.container {
	position: absolute;
	top: 0;
	left: 0;
	//right: 0;
	//bottom: 0;
	//width: 100%;
	width: 199px;
	height: 356px;
	display: flex;
	align-items: center;
	justify-content: center;
}


</style>