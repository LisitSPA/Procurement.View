<template>
	<div class="row" style="height: 10%;">
		<div class="col-12 d-flex align-items-center">
			<h1>Newsletters / FAQ's</h1>
			<button class="btn-border-lighblue-add" data-bs-toggle="modal" data-bs-target="#myModal"
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
							<th scope="col">TIPO</th>
							<th scope="col">IMAGEN</th>
							<th scope="col">ACCIONES</th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center dark-blue-text" v-for="(newsletter,index) in newsletters" :key="index">
							<th width="25">{{ index+1 }}</th>
							<td width="25">{{ newsletter.titulo }}</td>
							<td style="text-align: justify;" width="25">{{ newsletter.descripcion }}</td>
							<td width="25">{{ newsletter.nombreTipoAsset }}</td>
							<!-- <td width="25"><img src="https://picsum.photos/200" alt="imagen" style="width: 5vw"></td> -->
							<td width="25"><img :src="newsletter.urlsImagenes[0]" alt="newsletter image" style="width: 5vw"></td>
							<td width="25">
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"  
									@click="setModalContent('edit', newsletter)"><i class="bi bi-pencil-square"></i></button>
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"
								@click="setModalContent('delete', newsletter)"><i class="bi bi-trash-fill"></i></button>
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
					@updateNewsletterList="updateNewsletterList"
					:types="types"
					:key="componentKey"/>
				<Editar v-if="modalContent === 'edit'"
					@updateNewsletterList="updateNewsletterList"
					:types="types"
					:selectedNewsletter="selectedNewsletter"
					:key="componentKey"/>
				<Eliminar v-if="modalContent === 'delete'"
					@updateNewsletterList="updateNewsletterList"
					:selectedNewsletter="selectedNewsletter"
					:key="componentKey"/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import newsletterServices from './../../../services/Newsletters'

	// MODAL COMPONENTS
	import Crear from './Modal/Crear.vue'
	import Editar from './Modal/Editar.vue'
	import Eliminar from './Modal/Eliminar.vue'

	const modalContent = ref('create')
	const selectedNewsletter = ref({})
	const newsletters = ref([])
	const types = ref([])
	const componentKey = ref(0)

	const setModalContent = (option, newsletter) => {
		modalContent.value = option
		selectedNewsletter.value = newsletter
		componentKey.value +=1
	}

	const getNewsletters = async() => {
		try{
			const res = await newsletterServices.getNewsletters()
			newsletters.value = res.data
		}catch(error){
			console.log(error)
		}
	}

	const getTypes = async() => {
		try {
			const res = await newsletterServices.getNewslettersTypes()
			types.value = res.data
		} catch (error) {
			console.log(error)
			toast.error('Ha ocurrido un error al cargar los tipos.')
		}
	}

	const updateNewsletterList = (newsletter) => {
		var closeModal = document.getElementById("btnCerrar");
		if(modalContent.value === 'create'){
			newsletters.value.push(newsletter)
		}else if(modalContent.value === 'edit'){
			console.log(newsletter)
		}else if(modalContent.value === 'delete'){
			let index = newsletters.value.indexOf(newsletter);
			newsletters.value.splice(index, 1);
		}
		closeModal.click()
	}

	getTypes()
	getNewsletters()

</script>

<style scoped>
</style>