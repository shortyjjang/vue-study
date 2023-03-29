<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
	<div class="top-title">
		<button @click="backPath" class="back"></button>
		<h1 class="ptit">아이디 찾기</h1>
	</div>
	<div class="container signup">
		<!-- content area -->
		<h2 class="stit">회원님의 아이디는 다음과 같습니다  </h2>
		<div class="frm">
			<p><input type="text" class="text" value="chiandit@gmail.com" readonly /></p>
		</div>
		<div class="btn-area">
			<button v-on:click="$router.push({name:'Login'})" class="btn-submit">로그인</button>
		</div>
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