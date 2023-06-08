<template>
	<form @submit.prevent="updateUser">
		<div class="modal-header">
			<h5 class="modal-title" id="myModalLabel">Editar Usuario</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-12">
					<label for="">Nombre</label>
					<input type="text" class="form-control" v-model="name" disabled>
				</div>
				<div class="col-6">
					<label for="">Correo</label>
					<input type="text" class="form-control" v-model="email" disabled>
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
			<button type="submit" class="btn btn-primary btn-radius">
				Guardar
				<div v-if="btnSend" class="text-info spinner-border spinner-border-sm" role="status">
			 	</div>
			</button>
		</div>
	</form>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { toast } from 'vue3-toastify'
	import moment from 'moment'
	import userServices from '../../../../services/Users'

	const props = defineProps({
		roles: {
			required: true
		},
		selectedUser: {
			required: true
		}
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

	onMounted(() => {
		today.value = moment().format('YYYY-MM-D')
		name.value = props.selectedUser.names
		email.value = props.selectedUser.mail
		role.value = props.selectedUser.role
		bday.value = moment(props.selectedUser.fechaCumpleanos).format('YYYY-MM-DD')
		position.value = props.selectedUser.cargo
		today.value = ref('')
		image.value = ref('')
	})

	const updateUser = async () => {
		btnSend.value = true
		try {
			let data = new FormData()
			data.append('usuarioId', props.selectedUser.id)
			data.append('rol', role.value)
			data.append('Cargo', position.value)
			data.append('formFile', image.value)
			data.append('fechaCumpleanos', bday.value)
			const res = await userServices.updateUser(data)
			emit('updateUserList', res.data)
			btnSend.value = false
			toast.success('Se ha actualizado el registro exitosamente.')
		} catch (error) {
			console.log(error)
			btnSend.value = false
			toast.error('Ha ocurrido un error al actualizar el registro.')
		}
	}

	const uploadImage = async (event) => {
		image.value = event.target.files[0]
	}

	

</script>

<style scoped>

</style>