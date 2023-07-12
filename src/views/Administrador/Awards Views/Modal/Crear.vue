<template>
	<form @submit.prevent="storeAwards">
		<div class="modal-header">
			<h5 class="modal-title" id="myModalLabel">Añadir Procurement Awards</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-6">
					<label for="">Participación</label>
					<select class="form-control" v-model="participation" required>
						<option value="" selected disabled>Seleccione una opción...</option>
						<option v-for="(participation, index) in participations" :key="index" :value="participation.id">{{ participation.nombre }}</option>
					</select>
				</div>
				<div class="col-6">
					<label for="">Ubicación</label>
					<select class="form-control" v-model="location" required>
						<option value="" selected disabled>Seleccione una opción...</option>
						<option v-for="(location, index) in locations" :key="index" :value="location.id">{{ location.nombre }}</option>
					</select>
				</div>
				<div class="col-6">
					<label for="">Categoria</label>
					<select class="form-control" v-model="category" required>
						<option value="" selected disabled>Seleccione una opción...</option>
						<option v-for="(category, index) in categories" :key="index" :value="category.id">{{ category.nombre }}</option>
					</select>
				</div>
				<div class="col-6">
					<label for="">Fecha</label>
					<input type="month" class="form-control" v-model="date" required>
				</div>
				<div class="col-12">
					<label for="">Usuario</label>
					<select class="form-control" v-model="user" required>
						<option value="" selected disabled>Seleccione una opción...</option>
						<option v-for="(user, index) in users" :key="index" :value="user.id">{{ user.names }}</option>
					</select>
				</div>
				<div class="col-12">
					<label for="">Comentario</label>
					<textarea class="form-control" v-model="comments" cols="30" rows="5"></textarea>
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
	import awardsServices from '../../../../services/Awards';
	import moment from 'moment'

	const props = defineProps({
		categories: {
			required: true
		},
		locations: {
			required: true
		},
		participations: {
			required: true
		},
		users: {
			required: true
		}
	})

	const emit = defineEmits(['updateAwardsList'])
	const category = ref('')
	const participation = ref('')
	const location = ref('')
	const user = ref('')
	const comments = ref('')
	const date = ref('')
	const btnSend = ref(false)

	const storeAwards = async() => {
		btnSend.value = true
		try {
			let data = new FormData()
			data.append('usuarioId', user.value)
			data.append('participacionId', participation.value)
			data.append('categoriaId', category.value)
			data.append('ubicacionId', location.value)
			data.append('comentario', comments.value)
			data.append('anio', moment(date.value).format('YYYY'))
			data.append('mes', moment(date.value).format('MM'))
			const res = await awardsServices.storeAwards(data)
			toast.success('Se ha creado el registro exitosamente.')
			emit('updateAwardsList', res.data)
			console.log(res.data)
			btnSend.value = false
		} catch (error) {
			btnSend.value = false
			toast.error('Ha ocurrido un error al crear el registro.')
			console.log(error)
		}
	}

</script>

<style scoped>

</style>