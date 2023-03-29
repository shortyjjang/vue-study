<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
	<div class="container staking">
		<!-- content area -->
		<ul class="tab">
			<li><button @click="showStacking(true)" :class="{ 'router-link-active': isActive}">상품목록</button></li>
			<li><button @click="showStacking(false)" :class="[isActive ? '': 'router-link-active']">가입정보</button></li>
		</ul>
		<ul class="staking-list">
			<li class="staking-item" v-if="isActive">
				<h3>Platinum</h3>
				<p>최소수량 <b class="value">200 PAN</b></p>
				<p>스테이킹기간 <b class="value">730일</b></p>
				<p class="rate">만기 이자율 <b class="value">54%</b></p>
				<p class="fee">해지 수수료 <b class="value">-54%</b></p>
				<button class="btn-submit"  @click="addStaking()" data-type="platinum">신청</button>
			</li>
			<li class="staking-item" v-if="isActive">
				<h3>GOLD(24개월)</h3>
				<p>최소수량 <b class="value">200 PAN</b></p>
				<p>스테이킹기간 <b class="value">730일</b></p>
				<p class="rate">만기 이자율 <b class="value">54%</b></p>
				<p class="fee">해지 수수료 <b class="value">-54%</b></p>
				<button class="btn-submit"  @click="addStaking()" data-type="gold">신청</button>
			</li>
			<li class="staking-item" v-if="isActive">
				<h3>BRONZE(12개월)</h3>
				<p>최소수량 <b class="value">100 PAN</b></p>
				<p>스테이킹기간 <b class="value">360일</b></p>
				<p class="rate">만기 이자율 <b class="value">20%</b></p>
				<p class="fee">해지 수수료 <b class="value">-20%</b></p>
				<button class="btn-submit"  @click="addStaking()" data-type="bronze">신청</button>
			</li>
			<li class="staking-item" v-if="isActive">
				<h3>SILVER(6개월)</h3>
				<p>최소수량 <b class="value">50 PAN</b></p>
				<p>스테이킹기간 <b class="value">180일</b></p>
				<p class="rate">만기 이자율 <b class="value">10%</b></p>
				<p class="fee">해지 수수료 <b class="value">-10%</b></p>
				<button class="btn-submit"  @click="addStaking()" data-type="silver">신청</button>
			</li>
			<li class="staking-item" v-else>
				<h3>GOLD(24개월) <small>(Basic Interest 18.88%+Double preminum 5%)</small></h3>
				<p>신청수량 <b class="value">200 CDT</b></p>
				<p>신청일 <span class="value">2020-06-04</span></p>
				<p>만기일 <span class="value">2020-09-02</span></p>
				<p class="rate">만기 이자율 <b class="value">5%</b></p>
				<p>총 수령액 <b class="value">200 CDT</b></p>
				<p class="rate">오늘까지 이자 <b class="value">12.0000 CDT</b></p>
				<p class="fee">해지 수수료 <b class="value">-5%</b></p>
				<p>해지시 입금수량 <b class="value">95.0000 CDT</b></p>
				<button class="btn-submit">해지</button>
			</li>
		</ul>
	</div>
	<div id="popup_container">
		<div class="popup add_staking ">
			<h3 class="title">스테이킹 신청 </h3>
			<div class="type platinum">
				<div class="staking-list">
					<h3>Platinum <small>(Basic Interest 18.88%+Double preminum 5%)</small></h3>
					<p>최소수량 <b class="value">200 PAN</b></p>
					<p>스테이킹기간 <b class="value">730일</b></p>
					<p class="rate">만기 이자율 <b class="value">54%</b></p>
					<p class="fee">해지 수수료 <b class="value">-54%</b></p>
				</div>
				<div class="frm">
					<input type="text" class="text" placeholder="스테이킹 수량(CDT)" />
					<small class="comment">신청가능 수량: 487,2347.000 CDT</small>
				</div>
				<div class="btn-area">
					<button class="btn-cancel" @click="closePopup()">취소</button>
					<button class="btn-submit">신청하기</button>
				</div>
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
				isActive: true,
			}
		},
		methods: {
			closePopup() {
				$('#popup_container').hide().find('.popup').hide();
			},
			addStaking(){
				$('#popup_container').find('.add_staking.popup').show().end().show();
			},
			showStacking(val){
				this.$data.isActive = val;
			}
		}
	}
</script>
