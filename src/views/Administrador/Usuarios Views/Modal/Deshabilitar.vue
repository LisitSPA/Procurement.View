<template>
	<div class="modal-header">
		<h5 class="modal-title" id="myModalLabel">{{(selectedUser.activo)? "Deshabilitar Usuario": "Habilitar Usuario"}}</h5>
		<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
	</div>
	<div class="modal-body text-center">
		<h5>{{(selectedUser.activo)? "¿Estás seguro que quieres deshabilitar al usuario?": "¿Estás seguro que quieres habilitar al usuario?"}}</h5>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal" id="btnCerrar">Cerrar</button>
		<button type="button" class="btn btn-danger btn-radius" @click="disableUser(selectedUser)">{{(selectedUser.activo)? "Deshabilitar": "Habilitar"}}</button>
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

	const emit = defineEmits(['updateUserList'])

	const disableUser = async (user) => {
		try{
			const res = await UsersServices.disableUser(user.id)
			emit('updateUserList', res.data)
			if(res.data.activo){
				toast.success('Usuario habilitado.')
			}else{
				toast.success('Usuario deshabilitado.')
			}
		}catch(error){
			$('#myModal').modal('hide')
			toast.error('Ha ocurrido un error al actualizar el registro.')
			console.log(error)
		}
	}

</script>

<style scoped>

</style>