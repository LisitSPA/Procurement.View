<template>
	<form @submit.prevent="storeProject">
		<div class="modal-header">
			<h5 class="modal-title" id="myModalLabel">Añadir Proyecto</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-12">
					<label for="">Tipos</label>
					<select class="form-control" v-model="type">
						<option value="" disabled selected>Selecciona una opción...</option>
						<option v-for="(type, index) in types" :key="index" :value="type">{{ type.nombreTipo }}</option>
					</select>
				</div>
				<div class="col-12">
					<label for="">Archivo</label>
					<input type="file" class="form-control" accept=".docx, .xlsx, .pdf" @change="uploadFile($event)">
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
	import projectsServices from '../../../../services/Projects';

	defineProps({
		types: {
			required: true
		}
	})

	const emit = defineEmits(['updateProjectList'])
	const type = ref('')
	const file = ref('')
	const btnSend = ref(false)

	const storeProject = async () => {
		btnSend.value = true
		try{
			let data = new FormData()
			data.append('FormFile', file.value)
			data.append('TipoDocumentoId', type.value.id)
			const res = await projectsServices.storeProject(data)
			emit('updateProjectList', res.data)
			toast.success('Se ha creado el registro exitosamente.')
			btnSend.value = false
		}catch(error){
			btnSend.value = false
			toast.error('Ha ocurrido un error al crear el registro.')
			console.log(error)
		}
	}

	const uploadFile = async (event) => {
		file.value = event.target.files[0]
	}

</script>

<style scoped>

</style>