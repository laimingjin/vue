<template>
	<div>
		<nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
			<ul class="nav navbar-top-links navbar-right">
				<li @click='change'>
					<a><i class="fa fa-user"></i>欢迎,Tamsen</a>
				</li>
				<li @click='exit'>
					<a ><i class="fa fa-sign-out"></i>退出</a>
				</li>
			</ul>
		</nav>
	</div>

</template>

<script>
export default {
data() {
			return {
				ab:[{
					name:'小黄',
					ane:'18'
				}]
			}
		},
		methods: {
			change(){
				this.setlist(this.ab)
			},exit(){
			 this.$route.router.go({
					path: '/login'
				})
			}
		}
	}
</script>
<style>

</style>
