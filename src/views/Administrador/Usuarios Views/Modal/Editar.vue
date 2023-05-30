<template>
	<div class="modal-header">
		<h5 class="modal-title" id="myModalLabel">Editar Usuario</h5>
		<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-12">
				<label for="">Nombre</label>
				<input type="text" class="form-control">
			</div>
			<div class="col-6">
				<label for="">Correo</label>
				<input type="text" class="form-control">
			</div>
			<div class="col-6">
				<label for="">Rol</label>
				<select class="form-control" v-model="role">
					<option value="" disabled selected>Selecciona una opción...</option>
					<option v-for="(role, index) in roles" :key="index">{{ role }}</option>
				</select>
			</div>
			<div class="col-6">
				<label for="">Fecha Nacimiento</label>
				<input type="date" class="form-control" 
					v-model="bday" 
					:max="today"
					required>
			</div>
			<div class="col-6">
				<label for="">Foto Perfil</label>
				<input type="file" class="form-control" accept="image/png, image/jpeg, image/jpg">
			</div>
		</div>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal">Cerrar</button>
		<button type="button" class="btn btn-primary btn-radius">Guardar</button>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { toast } from 'vue3-toastify';
	import moment from 'moment'

	defineProps({
		roles: {
			required: true
		}
	})

	onMounted(() => {
		today.value = moment().format('YYYY-MM-D')
	})

	const name = ref('')
	const lastname = ref('')
	const email = ref('')
	const position = ref('')
	const role = ref('')
	const bday = ref('')
	const today = ref('')
	const image = ref('')
	const btnSend = ref(false)

</script>

<style scoped>

</style>