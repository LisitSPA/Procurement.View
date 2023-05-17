<template>
	<div class="row top-menu bg-gris">
		<TopMenu/>
	</div>
	<AdminMenu />
	<div class="row malla-admin">
		<div class="contenido">
			<Usuarios @setModalContent="setModalContent"/>
		</div>
		<SectionFooter/>
	</div>
	<!-- MODAL -->
	<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content">
				<CrearUsuario v-if="modalContent === 'create'"/>
				<EditarUsuario v-if="modalContent === 'edit'"/>
				<DeshabilitarUsuario v-if="modalContent === 'deshabilitar'"/>
			</div>
		</div>
	</div>
</template>

<script setup>
import {ref} from 'vue'
	import TopMenu from '../../components/Shared/TopMenu.vue'
	import AdminMenu from '../../components/Shared/AdminMenu.vue'
	import SectionFooter from '../../components/Shared/SectionFooter.vue'
	import Usuarios from './Usuarios Views/Usuarios.vue'

	// MODAL COMPONENTS
	import CrearUsuario from './Usuarios Views/Crear.vue'
	import EditarUsuario from './Usuarios Views/Editar.vue'
	import DeshabilitarUsuario from './Usuarios Views/Deshabilitar.vue'

	const modalContent = ref('create')

	function setModalContent(option){
		modalContent.value = option
	}



</script>

<style>

</style>