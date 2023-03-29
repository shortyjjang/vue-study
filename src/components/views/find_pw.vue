<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
	<div class="top-title">
		<button @click="backPath" class="back"></button>
		<h1 class="ptit">비밀번호 찾기</h1>
	</div>
	<div class="container signup find-pw">
		<!-- content area -->
		<div class="step step1" style="display:block">
			<div class="frm">
				<p><input type="text" class="text" value="아이디" /></p>
				<p><input type="text" class="text" value="이메일" /></p>
			</div>
			<div class="btn-area">
				<button class="btn-submit" @click="nextStep">다음</button>
			</div>
		</div>
		<div class="step step2">
			<h2 class="stit">전송완료</h2>
			<p class="success">회원님의 비밀번호가 이메일로 전송되었습니다</p>
			<div class="btn-area">
			<button v-on:click="$router.push({name:'Login'})" class="btn-submit">로그인</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>

<script>
	export default {
		data() {
			return {
			itemRefs: []
			}
		},
		methods: {
			nextStep() {
				$('.step1').hide();
				$('.step2').show();
			},
			backPath(){
				this.$router.go(-1)
			}
		}
	}
</script>