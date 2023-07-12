<template>
	<div class="modal-header">
		<h5 class="modal-title" id="myModalLabel">Elliminar Award</h5>
		<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
	</div>
	<div class="modal-body text-center">
		<h5>¿Estás seguro que quieres eliminar el awards seleccionada?</h5>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal" id="btnCerrar">Cerrar</button>
		<button type="button" class="btn btn-danger btn-radius" @click="deleteAward()" :disabled="btnSend">
			Eliminar
			<div v-if="btnSend" class="text-info spinner-border spinner-border-sm" role="status">
			</div>
		</button>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import { toast } from 'vue3-toastify'
	import awardsServices from './../../../../services/Awards'

	const props = defineProps({
		selectedAward: {
			required: true
		}		
	})

	const emit = defineEmits(['updateAwardsList'])
	const btnSend = ref(false)

	const deleteAward = async () => {
		btnSend.value = true
		try {
			const res = await awardsServices.deleteAward(props.selectedAward.id)
			emit('updateAwardsList', props.selectedAward)
			toast.success('Se ha eliminado el registro exitosamente.')
			btnSend.value = false
		} catch (error) {
			console.log(error)
			btnSend.value = false
			toast.error('Ha ocurrido un error al eliminar el registro.')
		}
	}
	

</script>

<style scoped>

</style>