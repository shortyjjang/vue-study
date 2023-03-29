<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>

	<div class="container send">
		<!-- content area -->
		<div class="step step1" style="display:block;">
			<div class="frm">
				<ul class="tab">
					<li><a href="#" class="current">휴대폰번호</a></li>
					<li><a href="#">아이디(이메일)</a></li>
					<li><a href="#">지갑주소</a></li>
				</ul>
				<p class="receiver"><input type="text" class="text" placeholder="받는 사람 휴대폰번호"/></p>
				<p><input type="text" class="text" placeholder="전송수량(CDT)" />
				<small class="comment">보유수량: 487,2347.000 CDT</small></p>
				<p><input type="text" class="text" placeholder="간편 비밀번호"/></p>
				<p><span class="certification">
					<input type="tel" class="text" placeholder="인증코드를 입력해주세요">
					<button class="btn-check">인증요청</button>
				</span></p>
			</div>
			<div class="btn-area">
				<button class="btn-submit">다음</button>
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
		</div>
		<div class="step step2">
			<h2 class="stit">전송완료</h2>
			<p class="success">CHAINDIT 전송이 완료되었습니다.</p>
			<button class="btn-submit">거래내역 확인</button>
		</div>
	</div>
	<div class="popup confirm-infomation">
		<h3 class="title">전송정보확인</h3>
		<div class="frm">
			<p><label class="label">전송 지갑주소</label>
			0x2dad73fb871f03b5a29e45800081cc6541537ef1</p>
			<p class="qty"><label class="label">전송수량</label>
			<b>87,780</b>CDT</p>
			<p class="fee"><label class="label">수수료</label>
			<b>0.05</b>CDT</p>
		</div>
		<div class="btn-area">
			<button class="btn-cancel">취소</button>
			<button class="btn-submit">이체하기</button>
		</div>
	</div>

</template>

<style scoped>
</style>

<script>
	$('.popup .btn-close, .popup .btn-cancel').on('click',function(){
		$('#popup_container').removeAttr('class').removeAttr('style');
	});
	$('#header .back').on('click',function(){
		if (!$('.step:visible').hasClass('step1')) {
			$('.step:visible').hide().prev().show();
			return false;
		}
	});
	$('.tab a').click(function(){
		$(this).closest('.tab').find('a').removeClass('current').end().end().addClass('current');
		$('.frm .receiver input').attr('placeholder','받는 사람 '+$(this).text());
		return false;
	});
	$('.step1 .btn-submit').on('click',function(){
		$(this).closest('p').find('.btn-check').addClass('on').text('인증완료');
		$('#popup_container').addClass('confirm-infomation').show();
	});
	$('.confirm-infomation .btn-submit').on('click',function(){
		$('#popup_container').removeAttr('class').removeAttr('style');
		$('.send').find('.step').hide().end().find('.step2').show();
		$('#header .back').hide();
	});
</script>
