<template>
	<div class="row" style="height: 10%;">
		<div class="col-12 d-flex align-items-center">
			<h1>Usuarios</h1>
			<button class="btn-border-lighblue-add" data-bs-toggle="modal" data-bs-target="#myModal"
				style="margin-left: 1rem;" @click="setModalContent('create')"><i class="bi bi-plus" style="font-size: 1.2rem;"></i> Añadir Usuario</button>
		</div>
	</div>
	<div class="row" style="height: 85%;">
		<div class="col-12 h-100" style="padding-top: 1rem;">
			<div class="table-responsive h-100">
				<table class="table table-hover ">
					<thead>
						<tr class="bg-blue1 text-white text-center">
							<th scope="col">#</th>
							<th scope="col">NOMBRE</th>
							<th scope="col">CORREO</th>
							<th scope="col">ROL</th>
							<th scope="col">ACCIONES</th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center dark-blue-text" v-for="(user,index) in users" :key="index">
							<th scope="row">{{ index+1 }}</th>
							<td>{{user.names}}</td>
							<td>{{user.mail}}</td>
							<td>{{user.role}}</td>
							<td>
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"  
									@click="setModalContent('edit', user)"><i class="bi bi-pencil-square"></i></button>
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"
								@click="setModalContent('disabled', user)"><i class="bi bi-trash-fill"></i></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div class="row" style="height: 5%;">
		<div class="col-12 d-flex justify-content-center align-items-center">
			<nav aria-label="Page navigation example">
				<ul class="pagination m-0">
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					<li class="page-item"><a class="page-link" href="#">1</a></li>
					<li class="page-item"><a class="page-link" href="#">2</a></li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
	<!-- modal -->
	<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content">
				<CrearUsuario v-if="modalContent === 'create'" 
					:roles="roles"
					@updateUserList="updateUserList"
					:key="componentKey"/>
				<EditarUsuario v-if="modalContent === 'edit'"
					:roles="roles"
					:selectedUser="selectedUser"
					:key="componentKey"/>
				<DeshabilitarUsuario v-if="modalContent === 'disabled'" 
					:selectedUser="selectedUser"
					:key="componentKey"/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import UserServices from '../../../services/Users'

	// MODAL COMPONENTS
	import CrearUsuario from './Modal/Crear.vue'
	import EditarUsuario from './Modal/Editar.vue'
	import DeshabilitarUsuario from './Modal/Deshabilitar.vue'

	const modalContent = ref('create')
	const users = ref([])
	const roles = ref([])
	const selectedUser = ref({})
	const componentKey = ref(0)

	const setModalContent = (option, user) => {
		modalContent.value = option
		selectedUser.value = user
		componentKey.value += 1
	}

	const updateUserList = (user) => {
		var closeModal = document.getElementById("btnCerrar");
		closeModal.click()
		users.value.push(user)
	}

	const getusers = async() => {
		try{
			const res = await UserServices.getUsers()
			users.value = res.data
		}catch(error){
			console.log(error)
		}
	}

	const getRoles = async() => {
		try{
			const res = await UserServices.getRoles()
			roles.value = res.data
		}catch(error){
			console.log(error)
		}
	}

	getusers()
	getRoles()

</script>

<style scoped>

</style>