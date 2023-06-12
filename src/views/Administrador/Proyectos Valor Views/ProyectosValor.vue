<template>
	<div class="row" style="height: 10%;">
		<div class="col-12 d-flex align-items-center">
			<h1>Proyectos de Valor</h1>
			<button class="btn-border-lighblue-add" data-bs-toggle="modal" data-bs-target="#myModal"
				style="margin-left: 1rem;" @click="setModalContent('create')"><i class="bi bi-plus" style="font-size: 1.2rem;"></i> Añadir Proyecto</button>
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
							<th scope="col">MODULO</th>
							<th scope="col">FECHA CARGA</th>
							<th scope="col">ACCIONES</th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center dark-blue-text" v-for="(user,index) in 10" :key="index">
							<th scope="row">{{ index+1 }}</th>
							<td>Prueba</td>
							<td>Planes de Ahorro</td>
							<td>09-06-2023</td>
							<td>
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"  
									@click="setModalContent('edit', user)"><i class="bi bi-pencil-square"></i></button>
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"
								@click="setModalContent('delete', user)"><i class="bi bi-trash-fill"></i>
								</button>
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
				<Crear v-if="modalContent === 'create'" 
					:key="componentKey"/>
				<Eliminar v-if="modalContent === 'delete'" 
					:key="componentKey"/>			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	// MODAL COMPONENTS
	import Crear from './Modal/Crear.vue'
	import Eliminar from './Modal/Eliminar.vue'

	const modalContent = ref('create')
	const selectedProject = ref({})
	const componentKey = ref(0)

	const setModalContent = (option, user) => {
		modalContent.value = option
		selectedProject.value = user
		componentKey.value += 1
	}

	const updateProjectList = (user) => {
		var closeModal = document.getElementById("btnCerrar");
		
		closeModal.click()
	}

	

</script>

<style scoped>

</style>