<template>
	<div class="row top-menu bg-gris">
		<TopMenu/>
	</div>
	<SectionMenu :titleSection="titleSection" :titleSubSection="titleSubSection" @updateContent="updateContent"/>
	<div class="row malla">
		<div class="contenido">
			<Home v-if="content === 'home'" @updateContent="updateContent"/>
			<Procedimientos v-if="content === 'procedimientos'"/>
			<Racis v-if="content === 'racis'"/>
			<Manuales v-if="content === 'manuales'"/>
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
	import Procedimientos from './Procedimientos.vue'
	import Racis from './Racis.vue'
	import Manuales from './Manuales.vue'
	import { ref, watch } from 'vue';

	const content = ref('home');
	const backstate = ref('');
	const titleSection = ref('Procurement Excellence');
	const titleSubSection = ref('Home');

	watch(content, async (newContent, oldContent) => {
		backstate.value = oldContent
		switch (newContent) {
			case 'home':
				titleSubSection.value = 'Home' 
				break;
			case 'procedimientos':
				titleSubSection.value = 'Procedimientos' 
				break;
			case 'racis':
				titleSubSection.value = 'RACIs'
				break;
			case 'manuales':
				titleSubSection.value = 'Manuales' 
				break;
		}
	})
	function updateContent(value){
		content.value = value
	}

</script>

<style>

</style>