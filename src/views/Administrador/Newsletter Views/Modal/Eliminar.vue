<template>
	<div class="modal-header">
		<h5 class="modal-title" id="myModalLabel">Elliminar Newsletter</h5>
		<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
	</div>
	<div class="modal-body text-center">
		<h5>¿Estás seguro que quieres eliminar la newsletter seleccionada?</h5>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal" id="btnCerrar">Cerrar</button>
		<button type="button" class="btn btn-danger btn-radius" @click="deleteNewsletter()">Eliminar</button>
	</div>
</template>

<script setup>
	import { toast } from 'vue3-toastify'
	import newsletterServices from './../../../../services/Newsletters'

	const props = defineProps({
		selectedNewsletter: {
			required: true
		}		
	})

	const emit = defineEmits(['updateNewsletterList'])

	const deleteNewsletter = async () => {
		try {
			const data = {
				assetId: props.selectedNewsletter.id
			}
			const res = await newsletterServices.deleteNewsletter(data)
			emit('updateNewsletterList', props.selectedNewsletter)
			toast.success('Se ha eliminado el registro exitosamente.')
		} catch (error) {
			console.log(error)
			toast.error('Ha ocurrido un error al eliminar el registro.')
		}
	}
	

</script>

<style scoped>

</style>