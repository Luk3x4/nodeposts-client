import { createApp } from 'vue'
import App from './App.vue';
import store from './store/index.js';
import router from './router'

createApp(App).use(store).use(router).mount('#app')
