<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
	<div class="top-title">
		<button @click="backPath" class="back"></button>
		<h1 class="ptit">교환하기</h1>
	</div>
	<div class="container exchange">
		<!-- content area -->
		<h2 class="stit">ETHEREUM<small>(ETH)</small> → CHAINDIT<small>(CDT)</small></h2>
		<p class="comment">교환비율: 1 ETH = 0.0001 CDT</p>
		<div class="frm">
			<p class="pan"><span class="value" v-show="ethereum !== ''"><small>{{ethereum}}</small> ETH</span><input type="text" class="text" v-model="ethereum" placeholder="ETHEREUM" /></p>
			<p class="cdt"><span class="value" v-show="chaindit !== ''"><small>{{chaindit}}</small> CDT</span><input type="text" class="text" v-model="chaindit" placeholder="CHAINDIT" /></p>
			<button class="btn-submit">교환하기</button>
		</div>
	</div>
</template>

<style scoped>
</style>

<script>
	export default {
		data() {
			return {
				ethereum: '',
				chaindit: '',
			}
		},
		methods: {
			backPath(){
				this.$router.go(-1)
			}
		}
	}
</script>