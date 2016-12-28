<template>
	<nav class="navbar-default navbar-static-side own-nav fixedleft" >
		<div class="sidebar-collapse">
			<ul class="nav" id="side-menu">
				<user></user>
				<li><a @click='go("/main/userHome")'><i class="fa fa-home"></i><span class="nav-label">主页</span></a></li>
				<li><a @click='go("/main/navigation")'><i class="fa fa-home"></i><span class="nav-label">导航</span></a></li>

			</ul>
		</div>
	</nav>
</template>
<script>
	import User from './User.vue'
	export default {
		components: {
			User
		},
		data(){
			return{
				datas:[]
			}
		},
		methods:{
			go(el){
				this.$route.router.go({
					path: el
				})
			},

		},

	}
</script>
<style scoped>

</style>
