<script>
/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023/8/14 编写而成！
 *     祝你食用愉快！！！
 */


</script>

<template>
	<!-- 右键菜单 -->
	<div class="container">
		<!-- code here -->
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

:root {
	--color-bg-primary: #d0d6df;
	--color-bg-primary-offset: #f1f3f7;
	--color-bg-secondary: #fff;
	--color-text-primary: #3a3c42;
	--color-text-primary-offset: #898c94;
	--color-orange: #dc9960;
	--color-green: #1eb8b1;
	--color-purple: #657cc4;
	--color-black: var(--color-text-primary);
	--color-red: #d92027;
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
	// &:after {
	//   content: "";
	//   position: absolute;
	//   left: -12px;
	//   top: 0;
	//   right: 0;
	//   bottom: 0;
	//   display: block;
	//   outline: 2px solid hotpink;
	// }
	&:hover {
		display: flex;
	}
}

.menu-item {
	position: relative;
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

// Codepen spesific styling - only to center the elements in the pen preview and viewport
.container {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
// End Codepen spesific styling

</style>