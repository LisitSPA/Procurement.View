<template>
	<div class="row top-menu bg-gris">
		<TopMenu/>
	</div>
	<SectionMenu :titleSection="titleSection" :titleSubSection="titleSubSection" @updateContent="updateContent"/>
	<div class="row malla">
		<div class="contenido">
			<Home v-if="content === 'home'" @updateContent="updateContent"/>
			<ReportesMensuales v-if="content === 'reportes-mensuales'"/>
			<AdministracionContratos v-if="content === 'administracion-contratos'"/>
			<PanelContratosLegales v-if="content === 'contratos-legales'"/>
			<CosteDrivers v-if="content === 'coste-drivers'"/>
			<PagoProveedores v-if="content === 'pago-proveedores'"/>
			<Presupuestos v-if="content === 'presupuestos'"/>
		</div>
		<SectionFooter/>
	</div>

</template>

<script setup>
	import TopMenu from '../../../components/Shared/TopMenu.vue'
	import SectionMenu from '../../../components/Shared/SectionMenu.vue'
	import SectionFooter from '../../../components/Shared/SectionFooter.vue'
	import Home from '../../../components/Secciones/Control de Gestion/Home.vue'
	import ReportesMensuales from '../../../components/Secciones/Control de Gestion/ReportesMensuales.vue'
	import AdministracionContratos from '../../../components/Secciones/Control de Gestion/AdministracionContratos.vue'
	import PanelContratosLegales from '../../../components/Secciones/Control de Gestion/PanelContratosLegales.vue'
	import CosteDrivers from '../../../components/Secciones/Control de Gestion/CosteDrivers.vue'
	import PagoProveedores from '../../../components/Secciones/Control de Gestion/PagoProveedores.vue'
	import Presupuestos from '../../../components/Secciones/Control de Gestion/Presupuestos.vue'
	import { ref, watch } from 'vue';

	const content = ref('home');
	const backstate = ref('');
	const titleSection = ref('Control de Gestión');
	const titleSubSection = ref('Home');

	watch(content, async (newContent, oldContent) => {
		backstate.value = oldContent
		switch (newContent) {
			case 'home':
				titleSubSection.value = 'Home' 
				break;
			case 'reportes-mensuales':
				titleSubSection.value = 'Reportes Mensuales' 
				break;
			case 'administracion-contratos':
				titleSubSection.value = 'Administración de Contratos MARCO'
				break;
			case 'contratos-legales':
				titleSubSection.value = 'Panel de Contratos Legales'
				break;
			case 'coste-drivers':
				titleSubSection.value = 'Coste Drivers e Indicadores de Mercado'
				break;
			case 'pago-proveedores':
				titleSubSection.value = 'Panel de Pago a Proveedores'
				break;
			case 'presupuestos':
				titleSubSection.value = 'Presupuestos'
				break;
		}
	})
	function updateContent(value){
		content.value = value
	}

</script>

<style>


</style>