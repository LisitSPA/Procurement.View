import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"
import './assets/main.css'
// import axios from 'axios'

const app = createApp(App)

app.use(router)
// app.use(axios)

app.mount('#app')
