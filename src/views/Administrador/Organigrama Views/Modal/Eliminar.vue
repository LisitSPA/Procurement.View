<template>
	<div class="modal-header">
		<h5 class="modal-title" id="myModalLabel">Eliminar Organigrama</h5>
		<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
	</div>
	<div class="modal-body text-center">
		<h5>¿Estás seguro que quieres eliminar el organigrama actual?</h5>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal" id="btnCerrar">Cerrar</button>
		<button type="button" class="btn btn-danger btn-radius" @click="deleteOrganigrama" :disabled="btnSend">
			Eliminar
			<div v-if="btnSend" class="text-info spinner-border spinner-border-sm" role="status">
			</div>
		</button>
	</div>
</template>

<script setup>
	import { ref } from 'vue' 
	import { toast } from 'vue3-toastify'
	import newsletterServices from '../../../../services/Newsletters'

	const emit = defineEmits(['updateOrganigrama'])
	const props = defineProps({
		organigrama: {
			required: true
		}
	})
	const btnSend = ref(false)

	const deleteOrganigrama = async() => {
		btnSend.value = true
		try {
			const data = {
				assetId: props.organigrama.id
			}
			const res = await newsletterServices.deleteNewsletter(data)
			emit('updateOrganigrama')
			toast.success('Se ha eliminado el registro exitosamente.')
			btnSend.value = false
		} catch (error) {
			btnSend.value = false
			console.log(error)
			toast.error('Ha ocurrido un error al eliminar el organigrama.')
		}
	}

</script>

<style scoped>

</style>