<template>
	<div class="modal-header">
		<h5 class="modal-title" id="myModalLabel">Deshabilitar Usuario</h5>
		<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
	</div>
	<div class="modal-body text-center">
		<h5>¿Estás seguro que quieres deshabilitar al usuario?</h5>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal">Cerrar</button>
		<button type="button" class="btn btn-danger btn-radius" @click="disableUser(selectedUser)">Deshabilitar</button>
	</div>
</template>

<script setup>
	import { toast } from 'vue3-toastify'
	import UsersServices from './../../../../services/Users'
	defineProps({
		selectedUser: {
			required: true
		}
	})

	const disableUser = async (user) => {
		try{
			let data = new FormData()
			data.append('idUsuario', user.id)
			const res = await UsersServices.disableUser(data)
			console.log(res)
			toast.success('Usuario deshabilitado.')
		}catch(error){
			$('#myModal').modal('hide')
			toast.error('Se ha producido un error.')
			console.log(error)
		}
	}

</script>

<style scoped>

</style>