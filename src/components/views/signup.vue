<script setup>
import { ref } from 'vue'

defineProps({
})

const count = ref(0)
</script>

<template>
	<div class="top-title">
		<h1 class="ptit">회원가입</h1>
		<button @click="backLink" class="back"></button>
	</div>
	<div class="container signup">
		<!-- content area -->
		<div class="step step1" style="display:block;">
			<h2 class="stit">이용약관에 동의해주세요</h2>
			<dl class="policy">
				<dt><input type="checkbox" v-model="checked" v-on:change="checkAll(checked)"/>전체동의</dt>
				<dd><ul>
					<li><input type="checkbox" /> <button @click="showPolicy('view-agreement')">개인정보 수집 및 이용 동의(필수)</button></li>
					<li><input type="checkbox" /> <button @click="showPolicy('view-agreement')">개인정보처리방침(필수)</button></li>
					<li><input type="checkbox" /> <button @click="showPolicy('view-agreement')">서비스 이용약관(필수)</button></li>
					<li><input type="checkbox" /> <button @click="showPolicy('view-agreement')">컨텐츠 이용약관(필수)</button></li>
					<li><input type="checkbox" /> <button @click="showPolicy('view-agreement')">이메일가입 개인정보취급방침(필수)</button></li>
				</ul></dd>
			</dl>
			<div class="btn-area">
				<button class="btn-submit" disabled @click="nextStep(2)">다음</button>
			</div>
		</div>
		<div class="step step2">
			<h2 class="stit">이메일주소를 입력해주세요</h2>
			<div class="frm">
				<p><input type="text" class="text" placeholder="ex) chiaindit@gmail.com"/></p>
			</div>
			<div class="btn-area">
				<button class="btn-submit" @click="nextStep(3)">다음</button>
			</div>
		</div>
		<div class="step step3">
			<h2 class="stit">비밀번호를 입력해주세요</h2>
			<div class="frm">
				<p>
					<input type="password" class="text" placeholder="비밀번호" />
					<span class="check" data-pw="en">영문포함</span>
					<span class="check" data-pw="num">숫자포함</span>
					<span class="check" data-pw="emo">특수문자포함</span>
					<span class="check" data-pw="min">8자리이상</span>
					<a href="#" class="remove"></a>
				</p>
				<p><input type="password" class="text" placeholder="비밀번호 확인"/></p>
			</div>
			<div class="btn-area">
				<button class="btn-submit" @click="nextStep(4)">다음</button>
			</div>
		</div>
		<div class="step step4">
			<h2 class="stit">본인인증을 해주세요</h2>
			<div class="frm">
				<p><span class="certification">
					<input type="tel" class="text" @keyup="chkCertification" placeholder="휴대전화번호">
					<button class="btn-check">본인인증</button>
				</span>
				<span class="check-certification"><input type="tel" @keyup="successCertification" class="text" placeholder="인증번호"><small>2:58</small></span></p>
			</div>
			<div class="btn-area">
				<button class="btn-submit" @click="nextStep(5)">다음</button>
			</div>
		</div>
		<div class="step step5">
			<h2 class="stit">간편비밀번호를 입력해주세요</h2>
			<div class="frm">
				<p class="dot">
					<input type="password" readonly class="text" maxlength="4">
				</p>
			</div>
			<div class="keypad">
				<button value="1" v-on:click="addPW(1)">1</button>
				<button value="2" @click="addPW(2)">2</button>
				<button value="3" @click="addPW(3)">3</button>
				<button value="4" @click="addPW(4)">4</button>
				<button value="5" @click="addPW(5)">5</button>
				<button value="6" @click="addPW(6)">6</button>
				<button value="7" @click="addPW(7)">7</button>
				<button value="8" @click="addPW(8)">8</button>
				<button value="9" @click="addPW(9)">9</button>
				<button value="0" @click="addPW(0)">0</button>
				<button class="btn-delete">Delete</button>
			</div>
		</div>
		<div class="step step6">
			<h2 class="stit">간편비밀번호를 다시 입력해주세요</h2>
			<div class="frm">
				<p class="dot">
					<input type="password" readonly class="text" maxlength="4">
				</p>
			</div>
			<div class="keypad">
				<button value="1" v-on:click="addPW(1)">1</button>
				<button value="2" @click="addPW(2)">2</button>
				<button value="3" @click="addPW(3)">3</button>
				<button value="4" @click="addPW(4)">4</button>
				<button value="5" @click="addPW(5)">5</button>
				<button value="6" @click="addPW(6)">6</button>
				<button value="7" @click="addPW(7)">7</button>
				<button value="8" @click="addPW(8)">8</button>
				<button value="9" @click="addPW(9)">9</button>
				<button value="0" @click="addPW(0)">0</button>
				<button class="btn-delete">Delete</button>
			</div>
		</div>
		<div class="step step7">
			<h2 class="stit">가입완료</h2>
			<p class="success">CHAINDIT Wallet<br /> 회원가입이 완료되었습니다</p>
			<div class="btn-area">
				<button class="btn-submit" v-on:click="$router.push({name:'Home'})">확인</button>
			</div>
		</div>
	</div>

<div id="popup_container">
	<div class="popup view-agreement">
		<h3 class="title">개인정보 수집 및 이용동의 </h3>
		<div class="detail">
CHAINDIT Wallet(이하 "회사")은 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 및 정부가 제정한 개인정보보호지침 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보취급방침을 정하여 이용자의 권익 보호에 최선을 다하고 있습니다.
회사의 개인정보취급방침은 다음과 같은 내용을 담고 있습니다.

1. 수집하는 개인정보의 항목 및 수집방법
2. 개인정보의 수집 및 이용방법
3. 개인정보의 공유 및 제공
4. 개인정보의 취급위탁
5. 개인정보의 보유 및 이용기간
6. 개인정보 파기절차 및 이용방법
7. 만 14세 미만 아동의 개인정보 보호
8. 이용자의 권리과 그 행사 방법
9. 개인정보 자동 수집 장치의 설치 / 운영 및 거부에 관한 사항
10.개인정보의 기술적/관리적 보호 대책
11. 개인정보관리책임자 및 담당자의 연락처
12. 기타
13. 고지의 의무

1. 수집하는 개인정보의 항목 및 수집 방법
가. 수집하는 개인정보의 항목
회사는 회원가입, 원활한 고객상담, 각종 서비스의 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.

사이트구분필수 항목선택 항목첫차공통아이디(이메일), 비밀번호, 연락처(전화번호, 휴대전화번호) 개인(일반회원)닉네임판매자 사진딜러성명, 상호 및 상사명, 사업자 등록번호, 상사주소, 상사전화번호, 조합명 
이벤트나 추가 회원정보 수집을 통해 이용자의 관심분야에 대한 세부화된 항목의 정보는 수집될 수 있습니다.
또한 서비스 이용과정이나 사업 처리 과정에서 아래와 같은 정보들이 생성되어 수집될 수 있습니다.
- 이용자의 브라우저 종류 및 OS,검색어, 서비스 이용기록: 서비스 이용에 대한 통계 분석
- IP Address, 방문일시, 서비스 이용기록, 불량이용기록, 쿠키: 불법/부정 이용방지
- 결제 기록: 전자금융거래 기록 보관

회사는 서비스 제공에 필요한 최소한의 개인정보만 수집하며, 이용자의 기본적 인권을 침해할 우려가 있는 민감한 정보(인종, 종교, 사상, 출신지, 본적지, 정치적 성향 및 범죄기록, 건강상태 등)는 수집하지 않습니다.	
다만, 이용자가 수집에 동의하시는 경우는 예외로 합니다.

나. 개인정보 수집 방법
회사는 다음과 같은 적법하고 공정한 방법으로 개인정보를 수집합니다.
- 홈페이지 , 상담게시판, 이메일, 이벤트 응모, 배송요청
- 협력 회사로부터의 제공
- 생성 정보 수집 툴을 통한 수집

2. 개인정보의 수집 및 이용목적
회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.

가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금 정산 컨텐츠 제공, 물품배송 또는 청구서 등 발송, 본인인증, 구매 및 요금 결제, 요금 추심	

나. 회원관리 회원제 서비스 이용 및 제한적 본인 확인제에 따른 본인확인, 개인식별, 불량회원의 부정 이용방지와 비인가 사용방지, 가입의사 확인, 가입 및 가입횟수 제한, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달

다. 신규 서비스 개빌 및 마케팅 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 이벤트 및 광고성 정보 제공, 접속빈도 파악, 이용자의 서비스이용에 대한 통계, 오프라인(직거래센터)에서의 매매업자 회원 및 광고 관리

라. 수집한 개인정보의 이용목적 구분
- 아이디, 비밀번호, 닉네임 : 회원제 서비스 이용에 따른 본인 확인절차에 이용
- 이메일주소, 연락처(전화번호, 휴대전화번호) : 회원제 서비스 이용에 따른 본인 확인절차에 이용, 고지사항 전달 및 본인의사확인, 불만처리, 사용자 구분 등 원활한 의사소통 경로의 확보	
- 생년월일, 성별 , 주소: 회원의 서비스 이용에 대한 통계 분석, 마케팅 및 광고에 활용
- 주소 : 차량광고시 지역 검색 결과 노출에 이용
- 판매자사진 : 차량광고시 상세페이지 노출
- 사업자등록번호, 사업장주소: 세금계산서발행
- 상호, 상사명, 사업자 등록번호, 상사주소, 상사전화번호, 조합명, 상사팩스번호, 매매사원증번호 : 딜러회원서비스 제공

3. 개인정보의 공유 및 제공
회사는 이용자의 개인정보를 "2. 개인정보의 수집 및 이용목적"에서 고지한 범위 내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
- 이용자가 사전에 공개에 동의하였거나 서비스 제공 관련 계약 이행을 위하여 필요한 개인정보로 통상의 동의를 받기가 경제적/기술적 사유로 현저히 곤란한 경우
- 기타 법에 의해 요구된다고 선의로 판단되는 경우 (예. 관련 법령에 의거 적법한 절차에 의한 정부/수사기관의 요청이 있는 경우 등)
사업의 전부 또는 일부 양도, 인수합병 등으로 서비스 제공자의 권리와 의무를 이전 또는 승계하는 경우에는 그 사실을 사전에 상세하게 고지하고, 개인정보 수집/이용 등에 대한 동의 철회의 선택권을 부여합니다. 이용자가 온라인상의 게시판 등을 통해 기재한 인적사항을 제3자가 수집하는 경우가 있을 수 있으므로 이에 유의하시기 바랍니다. 이용자가 스스로 게시판 등을 통해 기재한 인적사항과 관련하여 회사는 어떠한 책임도 지지 않습니다.

4. 개인정보의 취급 위탁
회사는 서비스 향상을 위해서 필요한 경우 및 기타 서비스 제공을 위해서 이용자의 개인정보를 외부에 수집·보관·처리·이용·제공·관리·파기 등을 할 수 있도록 아래와 같이 업무를 위탁하여 운영하고 있습니다. 회사는 위탁계약 등을 통하여 서비스제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한 비밀유지, 제3자 제공의 금지 및 사고 시의 책임부담 등을 명확히 규정하고 당해 계약 내용을 서면 또는 전자적으로 보관하여 이용자의 권익을 보호하고 있습니다.

위탁 업무 내용수탁 업체개인정보의 보유 및 이용기간회원 본인 확인한국모바일인증㈜해당 업체에서 이미 보유하고 있는 
개인정보이기 때문에 별도로 저장하지 않음신용카드/무통장/휴대폰 소액결제㈜케이지이니시스회원탈퇴 시 혹은 위탁계약 종료시까지SMS 발송 업무다우기술050 개인번호 서비스㈜온세통신

5. 개인정보의 보유 및 이용기간
회사는 이용자가 회원으로서 서비스를 이용하는 동안 이용자의 개인정보를 보유 및 이용하며, 이용자가 회원탈퇴를 요청한 경우나 개인정보의 수집 및 이용목적을 달성하거나 보유 및 이용기간이 종료한 경우 또는 사업폐지 등의 사유가 발생한 경우 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.

가. 회사 내부 방침에 의한 정보 보유 사유
- 부정 이용 기록
- 보존 이유: 부정 이용 방지
- 보존 기간: 1년

나. 관련 법령에 의한 정보 보유 사유
상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.

이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
- 계약 또는 청약철회 등에 관한 기록 
보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
보존 기간 : 5년
- 대금결제 및 재화 등의 공급에 관한 기록
보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
보존 기간 : 5년
- 소비자의 불만 또는 분쟁처리에 관한 기록
보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
보존 기간 : 3년
- 본인확인에 관한 기록 
보존 이유 : 정보통신 이용촉진 및 정보보호 등에 관한 법률
보존 기간 : 6개월
- 방문에 관한 기록
보존이유; 통신 비밀 보호법
보존 기간 : 3년

6. 개인정보 파기절차 및 방법
회사는 다른 법률에 따라 개인정보를 보존하여야 하는 경우가 아닌 한, 수집한 이용자의 개인정보의 수집 및 이용목적이 달성되거나, 이용자가 회원탈퇴를 요청한 경우 지체 없이 파기하여 향후 어떠한 용도로도 열람 또는 이용할 수 없도록 처리합니다. 단, “5.개인정보의 보유 및 이용기간 가, 나”와 같은 예외 경우를 두고 있습니다. 회사의 개인정보 파기절치 및 방법은 다음과 같습니다.

가. 파기절차
이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보 보호 사유에 따라(5. 보유 및 이용기간 참조)일정 기간 저장된 후 파기됩니다. 동 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.

나. 파기방법
종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하며, 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.

7. 만 14세 미만 아동의 개인정보 보호
회사가 운영하는 사이트에서는 만14세 미만 아동의 경우 법정대리인(부모님 등)의 동의절차를 거쳐야만 회원 가입 및 아동의 개인정보 수집이 가능합니다. 만 14세 미만 아동의 법정대리인은 아동의 개인정보의 열람, 정정, 가입해지(동의 철회)를 요청할 수 있으며, 이러한 요청이 있을 경우 회사는 법정대리인 확인 후 지체 없이 필요한 조치를 취합니다. 만14세 미만 아동의 개인정보도 성인의 개인정보와 동일하게 관리되며, 법정대리인의 동의 없이는 제3자와 공유하지 않습니다.

8. 이용자의 권리와 그 행사 방법
이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지(동의철회)를 요청할 수도 있습니다. 이용자의 개인정보 조회, 수정을 위해서는 '개인정보변경'(또는 '회원정보수정' 등)을, 가입해지(동의철회)를 위해서는 ’회원탈퇴’를 클릭하여 본인 확인 절 차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.
혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.
이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정 보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 "5. 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도 로 열람 또는 이용할 수 없도록 처리하고 있습니다.

9. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항	
회사는 이용자들에게 특화된 맞춤서비스를 제공하기 위해서 이용자들의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트 를 운영하는 데 이용되는 서버(HTTP)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터 내의 하드디스크에 저장되기도 합니다.	

가. 쿠키의 사용 목적
이용자들이 방문한 회사의 각 서비스와 웹 사이트들에 대한 로그인 여부 등을 파악하여 이용자에게 최적화된 정보 제공을 위하여 사용합니다.

나. 쿠키의 설치/운영 및 거부
이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때 마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
쿠키 설정을 거부하는 방법으로는 이용자가 사용하는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나 모든 쿠키의 저장을 거부할 수 있습니다.
설정방법 (예:인터넷 익스플로러의 경우) : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보
다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 회사의 일부 서비스는 이용에 어려움이 있을 수 있습니다.

10. 개인정보의 기술적/관리적 보호 대책
회사는 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고 있습니다.

가. 개인정보 암호화
이용자의 주요 개인정보는 암호화하여 저장하고 있으며, 파일 및 전송데이터를 암호화하여 혹시 발생할 수 있는 사고 시라도 이용자의 개인정보가 유출되지 않도록 관리되고 있습니다.

나. 해킹 등에 대비한 대책
회사는 해킹이나 컴퓨터 바이러스 등에 의해 이용자의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다
개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고, 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있으며, 암호화 통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다. 그리고 24시간 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.

다. 취급 직원의 최소화 및 교육
회사의 개인정보관련 취급 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 개인정보취급방침의 준수를 항상 강조하고 있습니다. 또한, 임직원이 이용자의 개인정보를 취급하기 이전에 보안서약서를 통하여 이용자의 개인정보에 대한 정보유출을 사전에 방지하고 관련 사태규정을 마련하여 이에 대한 이행사항 및 준수 여부를 감시하기 위한 내부절차를 마련하고 있습니다.

라. 개인정보보호 전담기구의 운영
사내 개인정보보호전담기구 등을 통하여 개인정보취급방침의 이행사항 및 담당자의 준수 여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로 잡을 수 있도록 노력하고 있습니다.	

하지만 근본적으로 개인정보의 보안관리에는 이용자 본인의 노력도 중요합니다. Online 서비스는 오직 아이디와 비밀번호를 알고 있는 본인에게만 개인정 보에 접근할 수 있는 권한이 있으며, 비밀번호를 유지하고 관리할 책임 역시도 본인에게 있습니다. 반드시 본인만이 알 수 있는 내용으로 비밀번호를 구성 해야 하며, 주민번호의 일부 또는 전화번호 등 타인이 쉽게 도용할 수 있는 비밀번호의 사용을 지양해야 합니다. 또한 공동으로 사용하는 PC에서 회사의 서비스에 접속하여 로그인한 상태에서 다른 사이트로 이동할 경우, 혹은 서비스 이용을 종료하였을 경우에는 반드시 해당 브라우저를 종료하시기 바랍니다. 그렇지 않을 경우, 해당 브라우저를 통해 아이디, 비밀번호, 주민등록번호가 포함된 이용자의 개인정보가 타인에게 손쉽게 유출될 위험이 있습니다. 이용자 본인의 부주의나 인터넷상의 문제로 ID, 비밀번호, 주민등록번호 등 개인정보가 유출되어 발생한 문제에 대해 회사는 일체의 책임을 지지 않습니다.

11. 개인정보 관리 책임자 및 담당자의 연락처
회사는 개인정보에 대한 의견수렴 및 불만처리를 담당하는 개인정보 관리책임자 및 담당자를 지정하고 있고, 연락처는 아래와 같습니다.

개인정보 관리책임자
이름: 송상훈
소속: 서비스운영기획팀/이사
E.MAIL: privacy@mrpic.co.kr

귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 
회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
- 개인정보 보호 종합지원 포털(안전행정부 운영)
www.privacy.go.kr / 02-2100-3343
-개인정보 침해신고센터 (한국인터넷진흥원 운영)
privacy.kisa.or.kr / (국번없이) 118
- 개인정보보호지원센터 (한국정보화진흥원)
privacy.nia.or.kr / 02-2131-0111

12.기타
회사가 운영하는 사이트에 링크되어 있는 웹사이트들이 개인정보를 수집하는 행위에 대해서는 본 "첫차 개인정보취급방침"이 적용되지 않음을 알려 드립니다.

13.고지의의무
현 개인정보취급방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 변경이유 및 내용을 홈페이지의 '공지사항'을 통해 고지할 것입니다.
본 개인정보취급방침의 내용은 수시로 변경될 수 있으므로 사이트를 방문하실 때마다, 이를 확인하시기 바랍니다.
- 개인정보 취급 방침 버전 번호: Ver 1.0
- 공고일자: 2014년 10월 1일
- 시행일자: 2014년 10월 1일
		</div>
		<div class="btn-area">
			<button class="btn-submit" @click="closePopup">확인</button>
		</div>
		<button class="btn-close" @click="closePopup"></button>
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
			closePopup() {
				$('#popup_container').find('.popup').hide().end().hide();
			},
			nextStep(next) {
				$('.step').hide();
				$('.step'+next).show();
			},
			backLink(){
				if (!$('.step:visible').hasClass('step1')) {
					let step = Number($('.step:visible').attr('class').replace('step step','')) + 1;
					$('.step').hide();
					$('.step'+step).show();
				}else {
					this.$router.go(-1)
				}
			},
			showPolicy(popup){
				$('#popup_container').find('.'+popup).show().end().show();
			},
			chkCertification() {
				$('.check-certification').css('display','block');
				$('.certification .btn-check').text('재인증');
			},
			successCertification() {
				$('.check-certification').hide();
				$('.certification .btn-check').addClass('on').text('인증완료');
			},
			checkAll(val) {
				
				if (val === true) {
					$('.step1')
						.find('.btn-submit').removeAttr('disabled').end()
						.find('input:checkbox').attr('checked','checked');
				}else {
					$('.step1')
						.find('.btn-submit').attr('disabled','disabled').end()
						.find('input:checkbox').removeAttr('checked');
				}
			},
			addPW(val) {
				let step = Number($('.step:visible').attr('class').replace('step step',''));
				$('.step' + step + ' .dot input').val($('.step' + step + ' .dot input').val() + val);
				if($('.step' + step + ' .dot input').val().length === 4 ) {	
					$('.step').hide();
					$('.step'+(step + 1)).show();	
				}
			},
		}
	}
</script>
