<template>
	<div class="row top-menu bg-gris">
		<TopMenu/>
	</div>
	<SectionMenu :titleSection="titleSection" :titleSubSection="titleSubSection" @updateContent="updateContent"/>
	<div class="row malla">
		<div class="contenido">
			<Home v-if="content === 'home'" @updateContent="updateContent"/>
			<ImpactTracker v-if="content === 'impact-tracker'"/>
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
	import { ref, watch } from 'vue';

	const content = ref('home');
	const backstate = ref('');
	const titleSection = ref('Proyectos de Valor');
	const titleSubSection = ref('Home');

	watch(content, async (newContent, oldContent) => {
		backstate.value = oldContent
		switch (newContent) {
			case 'home':
				titleSubSection.value = 'Home' 
				break;
			case 'impact-tracker':
				titleSubSection.value = 'Impact Tracker' 
				break;
			case 'informes-mensuales':
				titleSubSection.value = 'Informes Mensuales' 
				break;
			case 'presentaciones':
				titleSubSection.value = 'Presentaciones' 
				break;
			case 'manual':
				titleSubSection.value = 'Manual' 
				break;
			case 'planes-ahorro':
				titleSubSection.value = 'Planes de Ahorro' 
				break;
			case 'reunion-plt':
				titleSubSection.value = 'Reunión PLT' 
				break;
			case 'licitaciones':
				titleSubSection.value = 'Licitaciones' 
				break;
		}
	})
	function updateContent(value){
		content.value = value
	}

</script>

<style>

</style>