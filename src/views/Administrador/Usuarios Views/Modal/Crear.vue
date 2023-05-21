<template>
	<form @submit.prevent="storeUser">
		<div class="modal-header">
			<h5 class="modal-title" id="myModalLabel">Añadir Usuario</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-6">
					<label for="">Nombre</label>
					<input type="text" class="form-control" v-model="name" required>
				</div>
				<div class="col-6">
					<label for="">Apellido</label>
					<input type="text" class="form-control" v-model="lastname" required>
				</div>
				<div class="col-6">
					<label for="">Correo</label>
					<input type="email" class="form-control" v-model="email" required>
				</div>
				<div class="col-6">
					<label for="">Cargo</label>
					<input type="text" class="form-control" v-model="position" required>
				</div>
				<div class="col-6">
					<label for="">Rol</label>
					<input type="text" class="form-control" v-model="role" required>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal">Cerrar</button>
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
	import UserServices from '../../../../services/Users'

	const name = ref('')
	const lastname = ref('')
	const email = ref('')
	const position = ref('')
	const role = ref('')
	const btnSend = ref(false)

	const storeUser = async () => {
		try{
			btnSend.value = true
			let data = new FormData()
			data.append('Email', email.value)
			data.append('Nombres', name.value + ' ' + lastname.value)
			data.append('Rol', role.value)
			const res = await UserServices.storeUser(data)
			console.log(res.data)
		}catch(error){
			btnSend.value = false
			console.log(error)
		}
	}

</script>

<style scoped>

</style>