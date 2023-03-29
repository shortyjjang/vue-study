<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
	<div class="container receive">
		<!-- content area -->
		<h2 class="stit">지갑주소</h2>
		<div class="frm">
			<p><input type="text" class="text" value="0x2dad73fb871f03b5a29e45800081cc6541537ef1" /></p>
			<button class="btn-submit">지갑주소 복사</button>
		</div>
		<div class="qr-code">
			<img src="../../assets/qrcode.png" />
		</div>
	</div>

</template>

<style scoped>
</style>


