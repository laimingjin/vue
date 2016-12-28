<template>
	<div id="wrapper">
		<menu-left></menu-left>
		<div id="page-wrapper" class="gray-bg">
			<aside-head></aside-head>
			<div class="pages">
				<router-view ></router-view>
			</div>
		</div>
	</div>
</template>
<script>
	import MenuLeft from '../view/MenuLeft.vue'
	import AsideHead from '../view/AsideHead.vue'
	export default {
		components: {
			MenuLeft,
			AsideHead
		},
		data () {
			return {

			}
		}

	}
</script>
<style>
	#wrapper {
		width: 100%;
		height: 100%;
		overflow-x: hidden;
	}
</style>
