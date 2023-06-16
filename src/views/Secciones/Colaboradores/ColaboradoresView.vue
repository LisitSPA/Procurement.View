<template>
	<div class="row top-menu bg-gris">
		<TopMenu/>
	</div>
	<SectionMenu :titleSection="titleSection" :titleSubSection="titleSubSection" @updateContent="updateContent"/>
	<div class="row malla">
		<div class="contenido">
			<HomeSection v-if="content === 'home'" @updateContent="updateContent"/>
			<Organigrama v-if="content === 'organigrama'"/>
			<Cumpleaños v-if="content === 'cumpleaños'"/>
			<ProcurementAwards v-if="content === 'procurement'"/>
			<NuevosIngresos v-if="content === 'ingresos'"/>
		</div>
		<SectionFooter/>
	</div>
</template>

<script setup>
	import TopMenu from '../../../components/Shared/TopMenu.vue'
	import SectionMenu from '../../../components/Shared/SectionMenu.vue'
	import SectionFooter from '../../../components/Shared/SectionFooter.vue'
	// contenido
	import HomeSection from './Home.vue'
	import Organigrama from './Organigrama.vue'
	import Cumpleaños from './Cumpleaños.vue'
	import ProcurementAwards from './ProcurementAwards.vue'
	import NuevosIngresos from './NuevosIngresos.vue'
	import { ref, watch } from 'vue';

	const content = ref('home');
	const backstate = ref('');
	const titleSection = ref('Colaboradores');
	const titleSubSection = ref('Home');

	watch(content, async (newContent, oldContent) => {
		backstate.value = oldContent
		switch (newContent) {
			case 'home':
				titleSubSection.value = 'Home' 
				break;
			case 'organigrama':
				titleSubSection.value = 'Organigrama' 
				break;
			case 'cumpleaños':
				titleSubSection.value = 'Cumpleaños' 
				break;
			case 'procurement':
				titleSubSection.value = 'Procurement Awards' 
				break;
			case 'ingresos':
				titleSubSection.value = 'Nuevos Ingresos' 
				break;
			
		}
	})
	function updateContent(value){
		content.value = value
	}

</script>

<style>

</style>