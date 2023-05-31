<template>
	<div class="row" style="height: 10%;">
		<div class="col-12 d-flex align-items-center">
			<h1>Organigrama</h1>
			<button class="btn-border-lighblue-add" data-bs-toggle="modal" data-bs-target="#myModal"
				style="margin-left: 1rem;" @click="setModalContent('create')" :disabled="organigrama != ''">
				<i class="bi bi-plus" style="font-size: 1.2rem;"></i> Añadir Organigrama
			</button>
			<button class="btn-border-lighblue-add" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"
			@click="setModalContent('delete')" :disabled="organigrama === ''">
				<i class="bi bi-trash-fill"></i>
			</button>
		</div>
	</div>
	<div class="row" style="height: 85%;">
		<div class="col-12 h-100 d-flex justify-content-center align-items-center" style="padding-top: 1rem;">
			<!-- <img  src="https://picsum.photos/1500/500" alt="imagen"> -->
			<img class="h-100 w-100" :src=" organigrama ? organigrama.urlsImagenes[0] : 'https://picsum.photos/1500/500'" alt="imagen">
		</div>
	</div>
	
	<!-- modal -->
	<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content">
				<CrearOrganigrama v-if="modalContent === 'create'"
					@updateOrganigrama="updateOrganigrama"/>
				<EliminarOrganigrama 
					v-if="modalContent === 'delete'"
					@updateOrganigrama="updateOrganigrama"
					:organigrama="organigrama"/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import UserServices from '../../../services/Users'

	// MODAL COMPONENTS
	import CrearOrganigrama from './Modal/Crear.vue'
	import EliminarOrganigrama from './Modal/Eliminar.vue'

	const modalContent = ref('create')
	const organigrama = ref('')

	const setModalContent = (option) => {
		modalContent.value = option
	}

	const updateOrganigrama = (newOrganigrama) => {
		var closeModal = document.getElementById("btnCerrar");
		if(modalContent.value === 'create'){
			organigrama.value = newOrganigrama
		}else{
			organigrama.value = ''
		}
		closeModal.click()
	}

</script>

<style scoped>

</style>