<template>
	<div class="gray-bg gray-bgs">
		<div class="middle-box text-center loginscreen  animated fadeInDown">
			<div>
				<h1 class="logo-name" style="text-align: center;">
					<img src="../../assets/image/logo.png" alt="" width="120px"/>
				</h1>
			</div>
			<div class="form-group">
				<input type="text" class="form-control" placeholder="用户名" required="" v-model="name">
			</div>
			<div class="form-group">
				<input type="password" class="form-control" placeholder="密码" required="" v-model='password' @keyup.enter='login'>
			</div>
			<a class="btn btn-primary block full-width m-b" @click='login' style="color: #FFFFFF;">登 录</a>
		  </div>
	</div>
</template>

<script>
	export default {
		  data () {
				return {
					name: '', // 用户名
					password: '', // 密码
				}
			},
			methods: {
				login() {
					var _this = this;
					if(this.name != '' && this.password != '') {
						this.$route.router.go({path: 'main'})
					} else {
						layer.msg('账号或密码不能为空！')
					}
				}
			}
	}
</script>
<style>
	.gray-bgs {
		height: 100%;
	}
</style>
