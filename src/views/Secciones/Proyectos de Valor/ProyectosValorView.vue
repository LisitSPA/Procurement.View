<template>
	<div class="row top-menu bg-gris">
		<TopMenu/>
	</div>
	<SectionMenu :titleSection="titleSection" :titleSubSection="titleSubSection" @updateContent="updateContent"/>
	<div class="row malla">
		<div class="contenido">
			<Home v-if="content === 'home'" @updateContent="updateContent"/>
			<ImpactTracker v-if="content === 'impact-tracker'"/>
			<InformesMensuales v-if="content === 'informes-mensuales'"/>
			<Presentaciones v-if="content === 'presentaciones'"  @updateSubContent="updateSubContent"/>
			<Manual v-if="content === 'manual'"/>
			<PlanesAhorro v-if="content === 'planes-ahorro'" />
			<ReunionPLT v-if="content === 'reunion-plt'" />
			<Licitaciones v-if="content === 'licitaciones'"  @updateSubContent="updateSubContent"/>

			<!-- Subcontenido -->
			<Otros v-if="subcontent === 'otros'" />
			<Comites v-if="subcontent === 'comites'" />
			<Seguimiento v-if="subcontent === 'seguimiento'" />
			<Directos v-if="subcontent === 'directos'" />
			<Indirectos v-if="subcontent === 'indirectos'" />
			<Servicios v-if="subcontent === 'servicios'" />
		</div>
		<SectionFooter/>
	</div>

</template>

<script setup>
	import TopMenu from '../../../components/Shared/TopMenu.vue'
	import SectionMenu from '../../../components/Shared/SectionMenu.vue'
	import SectionFooter from '../../../components/Shared/SectionFooter.vue'
	import Home from './../../../components/Secciones/Proyectos de Valor/Home.vue'
	import ImpactTracker from './../../../components/Secciones/Proyectos de Valor/ImpactTracker.vue'
	import InformesMensuales from './../../../components/Secciones/Proyectos de Valor/InformesMensuales.vue'
	import Presentaciones from './../../../components/Secciones/Proyectos de Valor/Presentaciones.vue'
	import Manual from './../../../components/Secciones/Proyectos de Valor/Manual.vue'
	import PlanesAhorro from './../../../components/Secciones/Proyectos de Valor/PlanesAhorro.vue'
	import ReunionPLT from './../../../components/Secciones/Proyectos de Valor/ReunionPLT.vue'
	import Licitaciones from './../../../components/Secciones/Proyectos de Valor/Licitaciones.vue'
	// Subcontenido
	import Otros from './../../../components/Secciones/Proyectos de Valor/Presentaciones Views/Otros.vue'
	import Comites from './../../../components/Secciones/Proyectos de Valor/Presentaciones Views/Comites.vue'
	import Seguimiento from './../../../components/Secciones/Proyectos de Valor/Presentaciones Views/Seguimiento.vue'
	import Directos from './../../../components/Secciones/Proyectos de Valor/Licitaciones Views/Directos.vue'
	import Indirectos from './../../../components/Secciones/Proyectos de Valor/Licitaciones Views/Indirectos.vue'
	import Servicios from './../../../components/Secciones/Proyectos de Valor/Licitaciones Views/Servicios.vue'
	import { ref, watch } from 'vue';

	const content = ref('home');
	const subcontent = ref('');
	const backstate = ref('');
	const titleSection = ref('Proyectos de Valor');
	const titleSubSection = ref('Home');

	watch(content, async (newContent, oldContent) => {
		backstate.value = oldContent
		switch (newContent) {
			case 'home':
				titleSubSection.value = 'Home' 
				subcontent.value = ''
				break;
			case 'impact-tracker':
				titleSubSection.value = 'Impact Tracker'
				subcontent.value = '' 
				break;
			case 'informes-mensuales':
				titleSubSection.value = 'Informes Mensuales' 
				subcontent.value = ''
				break;
			case 'presentaciones':
				titleSubSection.value = 'Presentaciones' 
				subcontent.value = ''
				break;
			case 'manual':
				titleSubSection.value = 'Manual' 
				subcontent.value = ''
				break;
			case 'planes-ahorro':
				titleSubSection.value = 'Planes de Ahorro' 
				subcontent.value = ''
				break;
			case 'reunion-plt':
				titleSubSection.value = 'Reunión PLT' 
				subcontent.value = ''
				break;
			case 'licitaciones':
				titleSubSection.value = 'Licitaciones' 
				subcontent.value = ''
				break;
		}
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