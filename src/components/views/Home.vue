<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
	<div class="container index">
		<!-- content area -->
		<div class="total">
			<p class="email">{{userEmail}}</p>
			<p class="amount"><label>Total CHAINDIT</label>
			<b>{{balance_dalla}}.</b>{{balance_cent}} CDT
			<small class="more"><router-link :to="{name: 'Total'}">받기</router-link></small></p>
		</div>
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
				userEmail: 'chaindit@gmail.com',
				balance_dalla: '957,120',
				balance_cent: '5784',
			}
		},
	}
</script>
