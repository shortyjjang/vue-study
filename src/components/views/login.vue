<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
	<div class="container login">
		<!-- content area -->
		<h1 class="ptit"><img src="../../assets/logo-blue.png" /></h1>
		<div class="frm">
			<p><input type="text" class="text" placeholder="이메일"></p>
			<p><input type="text" class="text" placeholder="비밀번호"></p>
			<button class="btn-submit">로그인</button>
			<div class="other-way">
				<button @click="open_findID">아이디찾기</button>
				<router-link :to="{name:'FindPW'}">비밀번호 찾기</router-link>
				<router-link :to="{name:'SignUp'}">회원가입</router-link>
			</div>
			<button @click="showKeypad(true)">간편번호로 로그인하기</button>
			<div class="lang">
				<button><img src="../../assets/ic-ko.png" /> KOR</button>
				<button><img src="../../assets/ic-en.png" /> ENG</button>
			</div>
		</div>
	</div>
	<div id="popup_container">
		<div class="popup find_id">
			<h3 class="title">아이디 찾기</h3>
			<p>본인인증 후에 아이디 찾기가 가능합니다.<br />
			본인인증 페이지로 이동하시겠습니까? </p>
			<div class="btn-area">
				<button class="btn-cancel" @click="closePopup">취소</button>
				<button v-on:click="$router.push({name: 'FindId'})" class="btn-submit">이동하기</button>
			</div>
		</div>
	</div>
	<div class="simple_keypad" v-if="keypad">
		<div class="top-title">
			<button @click="showKeypad(false)" class="back">Back</button>
			<h1 class="ptit">로그인</h1>
		</div>
		<h2 class="stit">간편비밀번호</h2>
		<p class="comment">인증번호 4자리를 입력해주세요</p>
		<div class="frm">
			<p class="dot">
				<span class="placeholder">•</span><span class="placeholder">•</span><span class="placeholder">•</span><span class="placeholder">•</span>
				<input type="tel" class="text" readonly/>
			</p>
			<button @click="showKeypad(false)">이메일로 로그인하기</button>
		</div>
		<div class="keypad">
			<button value="1" @click="addPW()">1</button>
			<button value="2" @click="addPW()">2</button>
			<button value="3" @click="addPW()">3</button>
			<button value="4" @click="addPW()">4</button>
			<button value="5" @click="addPW()">5</button>
			<button value="6" @click="addPW()">6</button>
			<button value="7" @click="addPW()">7</button>
			<button value="8" @click="addPW()">8</button>
			<button value="9" @click="addPW()">9</button>
			<button value="0" @click="addPW()">0</button>
			<button class="btn-rearrange">재배열</button>
			<button class="btn-delete">Delete</button>
		</div>
	</div>
</template>

<style scoped>
</style>



<script>
	export default {
		data() {
			return {
				keypad : false,
			}
		},
		methods: {
			closePopup() {
				$('#popup_container').removeAttr('class').removeAttr('style');
			},
			showKeypad(val) {
				this.$data.keypad = val;
			},
			open_findID() {
				$('#popup_container').find('.popup.find_id').show().end().show();
			},
			addPW() {
				if ($(this).closest('.container').find('.dot .placeholder.on').length) {
					$(this).closest('.container').find('.dot .placeholder.on').next().addClass('on');
				}else{
					$(this).closest('.container').find('.dot .placeholder:eq(0)').addClass('on');
				}
			},
		}
	}
</script>
