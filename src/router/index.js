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
			component: () => import ('../views/Home/HomeView.vue')
		},
		{
			path: '/Colaboradores',
			name: 'colaboradores',
			component: () => import ('../views/Secciones/Colaboradores/ColaboradoresView.vue'),
			// children: [
			// 	{ path: '/homeColaboradores', name: 'homeColaboradores', component: () => import ('../components/Secciones/Colaboradores/Home.vue') },
			// 	{ path: '/homeOrganigrama', name: 'homeOrganigrama', component: () => import ('../components/Secciones/Colaboradores/Organigrama.vue') },
			// 	{ path: '/homeCumpleaños', name: 'homeCumpleaños', component: () => import ('../components/Secciones/Colaboradores/Cumpleaños.vue') },
			// 	{ path: '/homeProcurementAwards', name: 'homeProcurementAwards', component: () => import ('../components/Secciones/Colaboradores/ProcurementAwards.vue') },
			// { path: 'detail', name: 'detail', component: DetailView, props: true },
			// ]
		},
		{
			path: '/Control-Gestion',
			name: 'controlGestion',
			component: () => import ('../views/Secciones/Control de Gestion/ControlGestionView.vue'),
		},
		{
			path: '/Procurement-Excellence',
			name: 'procurementExcellence',
			component: () => import ('../views/Secciones/Procurement Excellence/ProcurementExcellenceView.vue'),
		},
		{
			path: '/Proyectos-de-Valor',
			name: 'proyectosValor',
			component: () => import ('../views/Secciones/Proyectos de Valor/ProyectosValorView.vue'),
			children: [
				{ path: '/Proyectos-de-Valor',	redirect: '/Proyectos-de-Valor/Home' },
				{ path: 'Home', name: 'homeProyecto', component: () => import ('../views/Secciones/Proyectos de Valor/Home.vue') },
				{ path: 'Impact-Tracker', name: 'impactTracker', component: () => import ('../views/Secciones/Proyectos de Valor/ImpactTracker.vue') },
				{ path: 'Informes-Mensuales', name: 'informesMensuales', component: () => import ('../views/Secciones/Proyectos de Valor/InformesMensuales.vue') },
				{ path: 'Presentaciones', name: 'presentaciones', component: () => import ('../views/Secciones/Proyectos de Valor/Presentaciones.vue') },
				{ path: 'Manual', name: 'manual', component: () => import ('../views/Secciones/Proyectos de Valor/Manual.vue') },
				{ path: 'Planes-Ahorro', name: 'planesAhorro', component: () => import ('../views/Secciones/Proyectos de Valor/PlanesAhorro.vue') },
				{ path: 'Reunion-PLT', name: 'reunionPLT', component: () => import ('../views/Secciones/Proyectos de Valor/ReunionPLT.vue') },
				{ path: 'Licitaciones', name: 'licitaciones', component: () => import ('../views/Secciones/Proyectos de Valor/Licitaciones.vue') },
				// subcontenido
				{ path: 'Presentaciones/Otros', name: 'otros', component: () => import ('../views/Secciones/Proyectos de Valor/Presentaciones Views/Otros.vue') },
				{ path: 'Presentaciones/Comites', name: 'comites', component: () => import ('../views/Secciones/Proyectos de Valor/Presentaciones Views/Comites.vue') },
				{ path: 'Presentaciones/Seguimiento', name: 'seguimiento', component: () => import ('../views/Secciones/Proyectos de Valor/Presentaciones Views/Seguimiento.vue') },
				{ path: 'Licitaciones/Directos', name: 'directos', component: () => import ('../views/Secciones/Proyectos de Valor/Licitaciones Views/Directos.vue') },
				{ path: 'Licitaciones/Indirectos', name: 'indirectos', component: () => import ('../views/Secciones/Proyectos de Valor/Licitaciones Views/Indirectos.vue') },
				{ path: 'Licitaciones/Servicios', name: 'servicios', component: () => import ('../views/Secciones/Proyectos de Valor/Licitaciones Views/Servicios.vue') },
			]
		},
		{
			path: '/Admin',
			name: 'administrador',
			component: () => import ('../views/Administrador/AdministradorView.vue'),
			children: [
				{ path: '/Admin',	redirect: '/Admin/Usuarios' },
				{ path: 'Usuarios', name: 'usuarios', component: () => import ('../views/Administrador/Usuarios Views/Usuarios.vue') },
				{ path: 'Newsletters', name: 'newsletters', component: () => import ('../views/Administrador/Newsletter Views/Newsletter.vue') },
				{ path: 'Organigrama', name: 'organigrama', component: () => import ('../views/Administrador/Organigrama Views/Organigrama.vue') },
				{ path: 'Awards', name: 'awards', component: () => import ('../views/Administrador/Awards Views/Awards.vue') },
				{ path: 'Proyectos-Valor', name: 'proyectosvalor', component: () => import ('../views/Administrador/Proyectos Valor Views/ProyectosValor.vue') },
			]
		},
		{
			path: '/Not-Found',
			name: 'notFound',
			component: () => import ('../views/Errors/404.vue'),
		},
  ]
})

export default router
