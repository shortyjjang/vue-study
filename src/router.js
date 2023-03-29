// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/views/Home.vue'),
  }, {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('./components/views/mypage.vue'),
  }, {
    path: '/total',
    name: 'Total',
    component: () => import('./components/views/total.vue'),
  }, {
    path: '/staking',
    name: 'Staking',
    component: () => import('./components/views/staking.vue'),
  },{
    path: '/signup',
    name: 'SignUp',
    component: () => import('./components/views/signup.vue'),
  }, {
    path: '/send',
    name: 'Send',
    component: () => import('./components/views/send.vue'),
  }, {
    path: '/receive',
    name: 'Receive',
    component: () => import('./components/views/receive.vue'),
  }, {
    path: '/purchases',
    name: 'Purchases',
    component: () => import('./components/views/purchases.vue'),
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('./components/views/login.vue'),
  }, {
    path: '/in-out',
    name: 'InOut',
    component: () => import('./components/views/inout.vue'),
    }, {
    path: '/find-id',
    name: 'FindId',
    component: () => import('./components/views/find_id.vue'),
  }, {
    path: '/find-pw',
    name: 'FindPW',
    component: () => import('./components/views/find_pw.vue'),
  }, {
    path: '/exchange',
    name: 'Exchange',
    component: () => import('./components/views/exchange.vue'),
  }, 
];

// 이렇게 해도 된다.
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
// export default router;

export const router = createRouter({
  history: createWebHistory(),
  routes,
});