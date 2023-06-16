<template>
	<div class="row top-menu bg-gris">
		<TopMenu/>
	</div>
	<SectionMenu :titleSection="titleSection" :titleSubSection="titleSubSection" @updateContent="updateContent"/>
	<div class="row malla">
		<div class="contenido">
			<Home v-if="content === 'home'" @updateContent="updateContent"/>
			<ReportesMensuales v-if="content === 'reportes-mensuales'" @updateSubContent="updateSubContent"/>
			<AdministracionContratos v-if="content === 'administracion-contratos'"/>
			<PanelContratosLegales v-if="content === 'contratos-legales'"/>
			<CosteDrivers v-if="content === 'coste-drivers'"/>
			<PagoProveedores v-if="content === 'pago-proveedores'"/>
			<Presupuestos v-if="content === 'presupuestos'"/>
			<!-- reportes mensuales -->
			<Bridge v-if="subcontent === 'bridge'"/>
			<IPS v-if="subcontent === 'ips'"/>
			<GestionProcurement v-if="subcontent === 'gestion-procurement'"/>
			<VariacionPrecios v-if="subcontent === 'variacion-precios'"/>
		</div>
		<SectionFooter/>
	</div>

</template>

<script setup>
	import TopMenu from '../../../components/Shared/TopMenu.vue'
	import SectionMenu from '../../../components/Shared/SectionMenu.vue'
	import SectionFooter from '../../../components/Shared/SectionFooter.vue'
	// contenido
	import Home from './Home.vue'
	import ReportesMensuales from './ReportesMensuales.vue'
	import AdministracionContratos from './AdministracionContratos.vue'
	import PanelContratosLegales from './PanelContratosLegales.vue'
	import CosteDrivers from './CosteDrivers.vue'
	import PagoProveedores from './PagoProveedores.vue'
	import Presupuestos from './Presupuestos.vue'
	// subcontenido
	import Bridge from './Reportes Views/Bridge.vue'
	import IPS from './Reportes Views/IPS.vue'
	import GestionProcurement from './Reportes Views/GestionProcurement.vue'
	import VariacionPrecios from './Reportes Views/VariacionPrecios.vue'
	import { ref, watch } from 'vue';

	const content = ref('home');
	const subcontent = ref('');
	const backstate = ref('');
	const titleSection = ref('Control de Gestión');
	const titleSubSection = ref('Home');

	watch(content, async (newContent, oldContent) => {
		backstate.value = oldContent
		switch (newContent) {
			case 'home':
				titleSubSection.value = 'Home'
				subcontent.value = ''
				break;
			case 'reportes-mensuales':
				titleSubSection.value = 'Reportes Mensuales' 
				subcontent.value = ''
				break;
			case 'administracion-contratos':
				titleSubSection.value = 'Administración de Contratos MARCO'
				subcontent.value = ''
				break;
			case 'contratos-legales':
				titleSubSection.value = 'Panel de Contratos Legales'
				subcontent.value = ''
				break;
			case 'coste-drivers':
				titleSubSection.value = 'Coste Drivers e Indicadores de Mercado'
				subcontent.value = ''
				break;
			case 'pago-proveedores':
				titleSubSection.value = 'Panel de Pago a Proveedores'
				subcontent.value = ''
				break;
			case 'presupuestos':
				titleSubSection.value = 'Presupuestos'
				subcontent.value = ''
				break;
		}
	})
	
	watch(subcontent, async (newSubContent, oldSubContent) => {
		titleSubSection.value = 'Reportes Mensuales'
	})

	function updateContent(value){
		content.value = value
	}

	function updateSubContent(value){
		subcontent.value = value
		content.value = ''
	}

</script>

<style>


</style>