import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
