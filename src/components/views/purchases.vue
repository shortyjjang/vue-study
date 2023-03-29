<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
	<div class="container purchases">
		<!-- content area -->
		<ul class="tab">
			<li><button @click="showPurchases('all')" :class="{ 'router-link-active': all}">전체</button></li>
			<li><button @click="showPurchases('in')" :class="{ 'router-link-active': onlyIn}">입금</button></li>
			<li><button @click="showPurchases('out')" :class="{ 'router-link-active': onlyOut}">출금</button></li>
		</ul>
		<ul class="purchases-list">
			<li v-if="onlyOut === false">
				<span class="date">2020-07-30 12:22:38</span>
				<span class="status">입금완료</span>
				<b class="type">입금</b>
				<b class="amount blue">200 CDT</b>
				<small class="receiver">받는사람 <a href="#">0x2dad73fb871f03b5a29e45800081cc6541537ef1</a></small>
			</li>
			<li v-if="onlyOut === false">
				<span class="date">2020-07-30 12:22:38</span>
				<span class="status">입금대기</span>
				<b class="type">입금</b>
				<b class="amount">200 CDT</b>
				<small class="receiver">받는사람 <a href="#">0x2dad73fb871f03b5a29e45800081cc6541537ef1</a></small>
			</li>
			<li v-if="onlyIn === false">
				<span class="date">2020-07-30 12:22:38</span>
				<span class="status">출금완료</span>
				<b class="type">출금</b>
				<b class="amount blue">200 CDT</b>
				<small class="receiver">받는사람 <a href="#">0x2dad73fb871f03b5a29e45800081cc6541537ef1</a></small>
			</li>
			<li v-if="onlyOut === false">
				<span class="date">2020-07-30 12:22:38</span>
				<span class="status">입금완료</span>
				<b class="type">입금</b>
				<b class="amount blue">200 CDT</b>
				<small class="receiver">받는사람 <a href="#">0x2dad73fb871f03b5a29e45800081cc6541537ef1</a></small>
			</li>
		</ul>
	</div>
</template>

<style scoped>
</style>



<script>
	export default {
		data() {
			return {
				onlyIn : false,
				onlyOut : false,
				all: true,
			}
		},
		methods: {
			showPurchases(type) {
				if(type === 'in') {
					this.$data.onlyIn = true;
					this.$data.onlyOut = false;
					this.$data.all = false;
				}else if (type === 'out') {
					this.$data.onlyIn = false;
					this.$data.onlyOut = true;
					this.$data.all = false;

				}else {
					this.$data.onlyIn = false;
					this.$data.onlyOut = false;
					this.$data.all = true;

				}
			}
		}
	}
</script>
