<template>
	<form @submit.prevent="storeOrganigrama">
		<div class="modal-header">
			<h5 class="modal-title" id="myModalLabel">Añadir Organigrama</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-12">
					<label for="">Imagen</label>
					<input type="file" class="form-control" accept="image/png, image/jpeg, image/jpg" @change="uploadImage($event)">
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal" id="btnCerrar">Cerrar</button>
			<button type="submit" class="btn btn-primary btn-radius" :disabled="btnSend">
			 Guardar
			 <div v-if="btnSend" class="text-info spinner-border spinner-border-sm" role="status">
			 </div>
			</button>
		</div>
	</form>
</template>

<script setup>
	import { ref } from 'vue'
	import { toast } from 'vue3-toastify';
	import newslettersServices from '../../../../services/Newsletters';

	const emit = defineEmits(['updateOrganigrama'])

	const image = ref('')
	const btnSend = ref(false)

	const storeOrganigrama = async() => {
		btnSend.value = true
		try {
			let data = new FormData()
			data.append('titulo', 'Organigrama')
			data.append('TipoAssetId', 3)
			data.append('FormFile', image.value)
			data.append('_method', 'POST')
			const res = await newslettersServices.storeNewsletter(data)
			emit('updateOrganigrama', res.data)
			toast.success('Se ha cargado el organigrama exitosamente.')
		} catch (error) {
			console.log(error)
			toast.error('Se ha producido un error al crear el organigrama.')
		}
	}

	const uploadImage = async (event) => {
		image.value = event.target.files[0]
	}

</script>

<style scoped>

</style>