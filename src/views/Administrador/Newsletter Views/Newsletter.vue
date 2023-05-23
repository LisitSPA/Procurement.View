<template>
	<div class="row" style="height: 10%;">
		<div class="col-12 d-flex align-items-center">
			<h1>Newsletters</h1>
			<button class="btn-border-lighblue" data-bs-toggle="modal" data-bs-target="#myModal"
				style="margin-left: 1rem;" @click="setModalContent('create')"><i class="bi bi-plus" style="font-size: 1.2rem;"></i> Añadir Newsletter</button>
		</div>
	</div>
	<div class="row" style="height: 85%;">
		<div class="col-12 h-100" style="padding-top: 1rem;">
			<div class="table-responsive h-100">
				<table class="table table-hover ">
					<thead>
						<tr class="bg-blue1 text-white text-center">
							<th scope="col">#</th>
							<th scope="col">TITULO</th>
							<th scope="col">DESCRIPCION</th>
							<th scope="col">IMAGEN</th>
							<th scope="col">ACCIONES</th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center dark-blue-text" v-for="(item,index) in 10" :key="index">
							<th width="25">{{ index+1 }}</th>
							<td width="25">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
							<td style="text-align: justify;" width="25">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error atque commodi nostrum assumenda iure, quam, doloremque nam, facere quibusdam veniam ea. Dicta quasi rerum, maiores perferendis vitae molestiae blanditiis aspernatur!</td>
							<td width="25"><img src="https://picsum.photos/200" alt="imagen" style="width: 5vw"></td>
							<td width="25">
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"  
									@click="setModalContent('edit')"><i class="bi bi-pencil-square"></i></button>
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"
								@click="setModalContent('delete', user)"><i class="bi bi-trash-fill"></i></button>
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
				<Crear v-if="modalContent === 'create'"/>
				<Editar v-if="modalContent === 'edit'"/>
				<Eliminar v-if="modalContent === 'delete'"/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	// MODAL COMPONENTS
	import Crear from './Modal/Crear.vue'
	import Editar from './Modal/Editar.vue'
	import Eliminar from './Modal/Eliminar.vue'

	const modalContent = ref('create')
	const newsletterSelected = ref({})

	const setModalContent = (option, user) => {
		modalContent.value = option
		newsletterSelected.value = user
	}

</script>

<style scoped>
.btn-border-lighblue{
		height: 4vh;
		color: var(--light-blue);
		border: 2px solid var(--light-blue);
		width: 8vw;
		border-radius: 30px;
		font-weight: bold;
	}
.btn-border-lighblue:hover{
	color: white;
	background-color: var(--light-blue);
}

.btn-actions{
	height: 2rem;
	color: var(--light-blue);
	border: 2px solid var(--light-blue);
	width: 4rem;
	border-radius: 30px;
	font-weight: bold;
}
.btn-actions:hover{
	color: white;
	background-color: var(--light-blue);
}
</style>