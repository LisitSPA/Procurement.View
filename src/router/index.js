import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			path: '/',
			name: 'login',
			component: () => import ('../views/Login/LoginView.vue')
		},
		{
			path: '/Home',
			name: 'home',
			component: () => import ('../views/Landing/HomeView.vue')
		}
  ]
})

export default router
