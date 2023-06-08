<template>
	<form @submit.prevent="storeUser">
		<div class="modal-header">
			<h5 class="modal-title" id="myModalLabel">Añadir Usuario</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-12">
					<label for="">Nombre</label>
					<input type="text" class="form-control" v-model="name" maxlength="100">
				</div>
				<div class="col-6">
					<label for="">Correo</label>
					<input type="email" class="form-control" v-model="email" maxlength="50">
				</div>
				<div class="col-6">
					<label for="">Rol</label>
					<select class="form-control" v-model="role">
						<option value="" disabled selected>Selecciona una opción...</option>
						<option v-for="(role, index) in roles" :key="index">{{ role }}</option>
					</select>
				</div>
				<div class="col-12">
					<label for="">Cargo</label>
					<input type="text" class="form-control" maxlength="50"
						v-model="position" 
						required>
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
	import { ref, onMounted } from 'vue'
	import { toast } from 'vue3-toastify';
	import moment from 'moment'
	import UserServices from '../../../../services/Users'

	defineProps({
		roles: {
			required: true
		}
	})
	onMounted(() => {
		today.value = moment().format('YYYY-MM-D')
	})

	const emit = defineEmits(['updateUserList'])
	const name = ref('')
	const email = ref('')
	const role = ref('')
	const bday = ref('')
	const today = ref('')
	const image = ref('')
	const position = ref('')
	const btnSend = ref(false)

	const storeUser = async () => {
		btnSend.value = true
		try{
			let data = new FormData()
			data.append('Email', email.value)
			data.append('Nombres', name.value)
			data.append('Rol', role.value)
			data.append('Cargo', position.value)
			data.append('FechaNacimiento', bday.value)
			data.append('ImagenPerfil', image.value)
			const res = await UserServices.storeUser(data)
			toast.success('Se ha creado el registro exitosamente.')
			emit('updateUserList', res.data)
			btnSend.value = false
		}catch(error){
			btnSend.value = false
			toast.error('Ha ocurrido un error al crear el registro.')
			console.log(error)
		}
	}

	const uploadImage = async (event) => {
		image.value = event.target.files[0]
	}

</script>

<style scoped>

</style>