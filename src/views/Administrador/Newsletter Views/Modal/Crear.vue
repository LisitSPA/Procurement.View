<template>
	<form @submit.prevent="storeNewsletter">
		<div class="modal-header">
			<h5 class="modal-title" id="myModalLabel">Añadir Newsletter</h5>
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
					<input type="text" class="form-control" v-model="title" required>
				</div>
				<div class="col-12">
					<label for="">Descripción</label>
					<textarea class="form-control" cols="30" rows="5" v-model="description" required></textarea>
				</div>
				<div class="col-12">
					<label for="">Imagen</label>
					<input type="file" class="form-control" accept="image/png, image/jpeg, image/jpg"
						@change="uploadImage($event)"
						:required="type === 1">
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
	import newsletterServices from './../../../../services/Newsletters';

	const props = defineProps({
		types: {
			required: true
		}
	})

	const emit = defineEmits(['updateNewsletterList'])

	const title = ref('')
	const description = ref('')
	const type = ref('')
	const image = ref('')
	const btnSend = ref(false)

	const storeNewsletter = async() => {
		btnSend.value = true
		try {
			let data = new FormData()
			data.append('Titulo', title.value)
			data.append('Descripcion', description.value)
			data.append('TipoAssetId', type.value)
			data.append('FormFile', image.value)
			data.append('_method', 'POST')
			const res = await newsletterServices.storeNewsletter(data)
			console.log(res.data)
			btnSend.value = false
			emit('updateNewsletterList', res.data)
			toast.success('Se ha creado el registro exitosamente.')
		} catch (error) {
			btnSend.value = false
			console.log(error)
		}
	}

	const uploadImage = async (event) => {
		image.value = event.target.files[0]
	}

</script>

<style scoped>

</style>