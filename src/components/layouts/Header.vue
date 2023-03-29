<template>
<ul id="naviation">
	<li class="home"><router-link :to="{ name: 'Home' }">홈</router-link></li>
	<li class="inout"><router-link :to="{ name: 'InOut' }">입출금</router-link></li>
	<li class="exchange"><router-link :to="{ name: 'Exchange' }">교환</router-link></li>
	<li class="staking"><router-link :to="{ name: 'Staking' }">스테이킹</router-link></li>
	<li class="purchases"><router-link :to="{ name: 'Purchases' }">거래내역</router-link></li>
</ul>
<div id="header">
	<div class="user"><router-link :to="{ name: 'MyPage' }">마에페이지</router-link></div>
	<div class="ptit"><img src="/src/assets/logo-text.png" alt="CHAINDIT" /></div>
</div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>

