<template>
	<div class="row top-menu bg-gris">
		<TopMenu/>
	</div>
	<AdminMenu @setSection="setSection"/>
	<div class="row malla-admin">
		<div class="contenido">
			<Usuarios v-if="sectionSelected === 'usuarios'"/>
		</div>
		<SectionFooter/>
	</div>
</template>

<script setup>
	import TopMenu from '../../components/Shared/TopMenu.vue'
	import AdminMenu from '../../components/Shared/AdminMenu.vue'
	import SectionFooter from '../../components/Shared/SectionFooter.vue'
	import Usuarios from './Usuarios Views/Usuarios.vue'

	import { ref } from 'vue';

	const sectionSelected = ref('usuarios')

	function setSection(option){
		sectionSelected.value = option
	}

</script>

<style>

</style>