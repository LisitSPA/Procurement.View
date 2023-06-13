<template>
	<div class="row" style="height: 10%;">
		<div class="col-12 d-flex align-items-center">
			<h1>Documentos</h1>
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
							<th scope="col">TIPO</th>
							<th scope="col">FECHA CARGA</th>
							<th scope="col">ACCIONES</th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center dark-blue-text" v-for="(project,index) in projects" :key="index">
							<th scope="row">{{ index+1 }}</th>
							<td>{{ project.nombreArchivo }}</td>
							<td>{{ project.tipoDocumento }}</td>
							<td>{{ project.fechaCreacion }}</td>
							<td>
								<button class="btn-actions" style="margin-left: 1rem;"
									@click="downloadFile(project)"><i class="bi bi-download"></i></button>
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"
								@click="setModalContent('delete', project)"><i class="bi bi-trash-fill"></i>
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
					:types="types"
					@updateProjectList="updateProjectList"
					:key="componentKey"/>
				<Eliminar v-if="modalContent === 'delete'" 
					:key="componentKey"/>			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue'
	import projectsServices from '../../../services/Projects';
	import moment from 'moment'

	// MODAL COMPONENTS
	import Crear from './Modal/Crear.vue'
	import Eliminar from './Modal/Eliminar.vue'
import { toast } from 'vue3-toastify';

	const modalContent = ref('create')
	const selectedProject = ref({})
	const types = ref('')
	const projects = ref('')
	const componentKey = ref(0)

	const setModalContent = (option, user) => {
		modalContent.value = option
		selectedProject.value = user
		componentKey.value += 1
	}

	const updateProjectList = (project) => {
		var closeModal = document.getElementById("btnCerrar");
		projects.value.push(project)
		closeModal.click()
	}

	const getProjectTypes = async() => {
		try {
			const res = await projectsServices.getProjectTypes()
			types.value = res.data
		} catch (error) {
			console.log(error)
		}
	}

	const getProjects = async() => {
		try {
			const res = await projectsServices.getProjects()
			projects.value = res.data
		} catch (error) {
			console.log(error)
		}
	}

	const downloadFile = async(project) => {
		try {
			const res = await projectsServices.downloadProject(project)
			toast.success('Se ha descargado el documento exitosamente.')
		} catch (error) {
			toast.error('Ha ocurrido un error al descargar el documento.')
			console.log(error)
		}
	}

	getProjectTypes()
	getProjects()

	

</script>

<style scoped>

</style>