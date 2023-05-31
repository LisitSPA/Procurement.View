<template>
	<form @submit.prevent="updateNewsletter">
		<div class="modal-header">
			<h5 class="modal-title" id="myModalLabel">Editar Newsletter</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-12">
					<label for="">Tipo</label>
					<select class="form-control" v-model="type" required>
						<option value="" selected disabled>Seleccione una opción...</option>
						<option v-for="(type, index) in props.types" :key="index" :value="type.id">{{ type.nombre }}</option>
					</select>
				</div>
				<div class="col-12">
					<label for="">Título</label>
					<input type="text" class="form-control" v-model="title">
				</div>
				<div class="col-12">
					<label for="">Descripción</label>
					<textarea class="form-control" cols="30" rows="5" v-model="description"></textarea>
				</div>
				<div class="col-12">
					<label for="">Imagen</label>
					<input type="file" class="form-control" accept="image/png, image/jpeg, image/jpg">
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
	import { onMounted, ref } from 'vue'
	import { toast } from 'vue3-toastify';
	import newsletterServices from '../../../../services/Newsletters';

	const props = defineProps({
		selectedNewsletter: {
			required: true
		},
		types: {
			required: true
		}
	})

	const emit = defineEmits(['updateNewsletterList'])
	const type = ref('')
	const title = ref('')
	const description = ref('')
	const image = ref('')
	const btnSend = ref(false)

	onMounted(() => {
		type.value = props.selectedNewsletter.tipoAssetId
		title.value = props.selectedNewsletter.titulo
		description.value = props.selectedNewsletter.descripcion
	})

	const updateNewsletter = async () => {
		btnSend.value = true
		try {
			let data = new FormData()
			data.append('AssetId', props.selectedNewsletter.id)
			data.append('TipoAssetId', type.value)
			data.append('Titulo', title.value)
			data.append('Descripcion', description.value)
			data.append('FormFile', image.value)
			const res = await newsletterServices.updateNewsletter(data)
			emit('updateNewsletterList', props.selectedNewsletter)
			btnSend.value = false
			toast.success('Se ha actualizado el registro exitosamente.')
		} catch (error) {
			btnSend.value = false
			console.log(error)
			toast.error('Ha ocurrido un error al actualizar el registro.')
		}
	}

</script>

<style scoped>

</style>