import { createApp } from 'vue'

//import { store } from './store';
import { router } from './router'; 

import App from './App.vue'

// Create Vue Instance
const app = createApp(App);

//app.use(store);
app.use(router);
app.mount('#app');

