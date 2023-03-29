<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
	<div class="container profile">
		<!-- content area -->
		<p class="info"><small>안녕하세요!</small> <b>{{userEmail}}</b> 님</p>
		<div class="frm">
			<h2 class="stit">기본정보수정</h2>
			<p><label class="label">이메일</label>
			<input type="text" class="text" v-model="userEmail"/></p>
			<p><label class="label">휴대전화번호</label>
				<span class="certification">
					<input type="number" class="text" placeholder="휴대전화번호" @keydown="chkCertification" v-model.number="phoneNum">
					<button class="btn-check">본인인증</button>
				</span>
				<span class="check-certification"><input type="number" class="text" placeholder="인증번호" @keydown="successCertification"><small>2:58</small></span>
			</p>
			<p><label class="label">이름</label>
			<input type="text" class="text" placeholder="홍길동"/></p>
			<button class="btn-submit">수정</button>
		</div>
		<div class="frm">
			<h2 class="stit">비밀번호변경</h2>
			<p><label class="label">현재 비밀번호를 입력해주세요</label>
				<input type="password" class="text" placeholder="현재 비밀번호" @keydown="function (event) {chkPW(event.key,'current')}" />
				<span class="check current" data-pw="en">영문포함</span>
				<span class="check current" data-pw="num">숫자포함</span>
				<span class="check current" data-pw="emo">특수문자포함</span>
				<span class="check current" data-pw="min">8자리이상</span>
			</p>
			<p><label class="label">새로운 비밀번호를 입력해주세요</label>
				<input type="password" class="text" placeholder="새로운 비밀번호" @keydown="function (event) {chkPW(event.key,'new')}" />
				<span class="check new" data-pw="en">영문포함</span>
				<span class="check new" data-pw="num">숫자포함</span>
				<span class="check new" data-pw="emo">특수문자포함</span>
				<span class="check new" data-pw="min">8자리이상</span>
			</p>
			<button class="btn-submit">수정</button>
		</div>
		<div class="frm">
			<h2 class="stit">간편 비밀번호변경</h2>
			<p><label class="label">모바일 인증</label>
				<input type="text" class="text" placeholder="인증코드" />
				<button class="btn-submit btn-code">모바일인증 코드 요청</button>
			</p>
			<p><label class="label">현재 간편 비밀번호를 입력해주세요</label>
				<input type="password" class="text" placeholder="현재 비밀번호" @focus="$(this).closest('.profile').addClass('show_keypad');" @blur="$(this).closest('.profile').removeClass('show_keypad');" />
			</p>
			<p><label class="label">새로운 간편 비밀번호를 입력해주세요</label>
				<input type="password" class="text" placeholder="새로운 비밀번호" @focus="$(this).closest('.profile').addClass('show_keypad');" @blur="$(this).closest('.profile').removeClass('show_keypad');" />
			</p>
			<button class="btn-submit">수정</button>
			<div class="keypad">
				<button value="1">1</button>
				<button value="2">2</button>
				<button value="3">3</button>
				<button value="4">4</button>
				<button value="5">5</button>
				<button value="6">6</button>
				<button value="7">7</button>
				<button value="8">8</button>
				<button value="9">9</button>
				<button value="0">0</button>
				<button class="btn-delete">Delete</button>
			</div>
		</div>
		<ul>
			<li><a href="#">회원탈퇴</a></li>
			<li><a href="#">로그아웃</a></li>
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
				phoneNum: '',
			}
		},
		methods: {
			chkCertification() {
				$('.check-certification').css('display','block');
				$('.certification .btn-check').text('재인증');
			},
			successCertification() {
				$('.check-certification').hide();
				$('.certification .btn-check').addClass('on').text('인증완료');
			},
			chkPW(key,pos) {
				console.log(key);
				if (key > 47 && key < 58) {
					alert(1);
					$('.check[data-pw="num"].'+pos).addClass('on');
				}
				if (key > 64 && key < 91) {
					alert(2);
					$('.check[data-pw="en"].'+pos).addClass('on');
				}
			},
		},
	}
</script>
