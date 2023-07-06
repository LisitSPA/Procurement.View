<template>
	<div class="row" style="height: 10%;">
		<div class="col-12 d-flex align-items-center">
			<h1>Procurement Awards</h1>
			<button class="btn-border-lighblue-add" data-bs-toggle="modal" data-bs-target="#myModal"
				style="margin-left: 1rem;" @click="setModalContent('create')"><i class="bi bi-plus" style="font-size: 1.2rem;"></i> Añadir Award</button>
		</div>
	</div>
	<div class="row" style="height: 85%;">
		<div class="col-12 h-100" style="padding-top: 1rem;">
			<div class="table-responsive h-100">
				<table class="table table-hover ">
					<thead>
						<tr class="bg-blue1 text-white text-center">
							<th scope="col">#</th>
							<th scope="col">USUARIO</th>
							<th scope="col">PARTICIPACIÓN</th>
							<th scope="col">UBICACIÓN</th>
							<th scope="col">CATEGORIA</th>
							<th scope="col">ACCIONES</th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center dark-blue-text" v-for="(award,index) in awards" :key="index">
							<th width="25">{{ index + 1 }}</th>
							<td width="25">{{ award.usuario }}</td>
							<td width="25">{{ award.participacion }}</td>
							<td width="25">{{ award.ubicacion }}</td>
							<td width="25">{{ award.categoria }}</td>
							<td width="25">
								<!-- <button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"  
									@click="setModalContent('edit', award)"><i class="bi bi-pencil-square"></i></button> -->
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"
								@click="setModalContent('delete', award)"><i class="bi bi-trash-fill"></i></button>
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
					@updateAwardsList="updateAwardsList"
					:participations="participations"
					:locations="locations"
					:categories="categories"
					:users="users"
					:key="componentKey"/>
				<Editar v-if="modalContent === 'edit'"
					@updateAwardsList="updateAwardsList"
					:participations="participations"
					:locations="locations"
					:categories="categories"
					:selectedAward="selectedAward"
					:key="componentKey"/>
				<!-- <Eliminar v-if="modalContent === 'delete'"
					:key="componentKey"/> -->
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import awardsServices from '../../../services/Awards';
	import userServices from '../../../services/Users'

	// MODAL COMPONENTS
	import Crear from './Modal/Crear.vue'
	import Editar from './Modal/Editar.vue'
	// import Eliminar from './Modal/Eliminar.vue'

	const modalContent = ref('create')
	const selectedAward = ref('')
	const componentKey = ref(0)
	const awards = ref('')
	const categories = ref('')
	const participations = ref('')
	const locations = ref('')
	const users = ref('')

	const setModalContent = (option, award) => {
		modalContent.value = option
		selectedAward.value = award
		componentKey.value +=1
	}

	const updateAwardsList = (award) => {
		var closeModal = document.getElementById("btnCerrar");
		if(modalContent === 'create'){
			awards.value.push(award)
		}else{
			getAwards()
		}
		closeModal.click()
	}

	const getAwards = async() => {
		try {
			const res = await awardsServices.getAwards()
			awards.value = res.data
			console.log(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	const getCategories = async() => {
		try {
			const res = await awardsServices.getAwardsCategories()
			categories.value = res.data
		} catch (error) {
			console.log(error)
		}
	}

	const getParticipations = async() => {
		try {
			const res = await awardsServices.getParticipations()
			participations.value = res.data
		} catch (error) {
			console.log(error)
		}
	}

	const getLocations = async() => {
		try {
			const res = await awardsServices.getLocations()
			locations.value = res.data
		} catch (error) {
			console.log(error)
		}
	}

	const getUsers = async() => {
		try {
			const res = await userServices.getUsers()
			users.value = res.data
		} catch (error) {
			console.log(error)
		}
	}

	getAwards()
	getCategories()
	getUsers()
	getParticipations()
	getLocations()

</script>

<style scoped>
</style>