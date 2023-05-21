import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"
import './assets/main.css'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)

app.use(router)
app.use(Vue3Toastify, {
  autoClose: 3000,
	theme: 'colored',
});

app.mount('#app')
