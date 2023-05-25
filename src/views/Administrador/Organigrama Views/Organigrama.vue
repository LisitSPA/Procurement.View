<template>
	<div class="row" style="height: 10%;">
		<div class="col-12 d-flex align-items-center">
			<h1>Organigrama</h1>
			<button class="btn-border-lighblue-add" data-bs-toggle="modal" data-bs-target="#myModal"
				style="margin-left: 1rem;" @click="setModalContent('create')"><i class="bi bi-plus" style="font-size: 1.2rem;"></i> Añadir Organigrama</button>
		</div>
	</div>
	<div class="row" style="height: 85%;">
		<div class="col-12 h-100 d-flex justify-content-center align-items-center" style="padding-top: 1rem;">
			<img  src="https://picsum.photos/1500/500" alt="imagen">
		</div>
	</div>
	
	<!-- modal -->
	<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content">
				<CrearOrganigrama v-if="modalContent === 'create'" :roles="roles"/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import UserServices from '../../../services/Users'

	// MODAL COMPONENTS
	import CrearOrganigrama from './Modal/Crear.vue'

	const modalContent = ref('create')

	const setModalContent = (option, user) => {
		modalContent.value = option
		selectedUser.value = user
	}

</script>

<style scoped>

</style>