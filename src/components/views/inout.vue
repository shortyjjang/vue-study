<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
	<div class="top-title">
		<button @click="backPath" class="back"></button>
		<h1 class="ptit">입출금</h1>
	</div>
	<div class="container inout">
		<!-- content area -->
		<p class="total amount"><label>Total CHAINDIT</label>
		<b>957,120.</b>5784 CDT</p>
		<ul class="total-detail">
			<li>사용가능 <span class="value"><b>110,487.4587</b> CDT</span>
			<p class="rate">스테이킹 사용가능 오늘이자(GOLD) <span class="value">0.3 CDT</span></p>
			<p class="rate">스테이킹 사용가능 오늘이자(SILVER) <span class="value">0.1 CDT</span></p></li>
			<li>스테이킹 <span class="value"><b>80</b> CDT</span></li>
			<li>락업 <span class="value"><b>70</b> CDT</span>
			<p>락업기간: 2020.09.30까지 <span class="value">40 CDT</span></p>
			<p>락업기간: 2020.10.30까지 <span class="value">30 CDT</span></p></li>
		</ul>
		<ul class="menu">
			<li class="send"><router-link :to="{name: 'Send'}">보내기</router-link></li>
			<li class="receive"><router-link :to="{name: 'Receive'}">받기</router-link></li>
		</ul>
	</div>
</template>

<style scoped>
</style>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			backPath(){
				this.$router.go(-1)
			}
		}
	}
</script>