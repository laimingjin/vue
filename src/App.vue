<template>
	<div class="pages">
		<router-view></router-view>
	</div>
</template>

<script>
import store from './components/vuex/store'
export default{
   store: store
}
</script>

<style>
	.pages {
		height: 100%;
	}
	.ibox-title > h5 > span {
		font-weight: normal;
		font-size: 14px;
		margin-left: 20px;
	}
	.rd-datepicker-value-input,
	.rd-select-selected-value {
		font-size: 12px;
	}
</style>
