// src/main.js
import './assets/scss/main.scss';

import { createApp } from 'vue';
import { router } from './router';  
import App from './App.vue';

const app = createApp(App).use(router).mount('#app');
