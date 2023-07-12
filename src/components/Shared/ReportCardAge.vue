<template>
	<!-- <div class="col mx-2 h-100" style="margin-right: 1rem;"> -->
		<div class="row" style="height: 12vh;">
			<div class="col-12 bg-gris d-flex justify-content-center align-items-center age-container">
				<span class="fw-bold" style="font-size: 20px;">2023</span>
			</div>
		</div>
		<div class="row bg-gris p-4">
			<div class="col-12"  style="height: 40vh; overflow-y: scroll;">
				<div class="row my-3" v-for="(document, index) in documents" :key="index">
					<div class="col-10">
						<div class="form-group">
							<!-- <label style="margin-left: 1.5rem;">Marzo</label> -->
							<input class="form-control" type="text" :value="document.nombreArchivo" disabled style="background-color: #CCCCCC;">
						</div>
					</div>
					<div class="col-2">
						<div class="form-group">
							<!-- <label for=""></label> -->
							<div class="bg-gris2 d-flex justify-content-center align-items-center cursor-pointer" style="height: 40px;"
								@click="downloadFile(document)">
								<!-- <i class="bi bi-file-earmark-excel-fill" style="color: green; font-size: 1.5rem;"></i> -->
								<div v-if="loading && selectedDocument === document" class="spinner-border text-primary" role="status">
									<span class="sr-only"></span>
								</div>
								<i v-else class="bi bi-file-earmark-arrow-down" style="font-size: 1.5rem;"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	<!-- </div> -->
</template>

<script setup>
	import { ref } from 'vue'
	import { toast } from 'vue3-toastify';
	import projectsServices from '../../services/Projects';

	defineProps({
		documents: {
			required: true
		}
	})

	const selectedDocument = ref({})
	const loading = ref(false)

	const downloadFile = async(project) => {
		selectedDocument.value = project
		loading.value = true
		try {
			const res = await projectsServices.downloadProject(project)
			toast.success('Se ha descargado el documento exitosamente.')
			loading.value = false
		} catch (error) {
			toast.error('Ha ocurrido un error al descargar el documento.')
			loading.value = false
			console.log(error)
		}
	}

</script>

<style scoped>
.age-container:hover{
	background-color: var(--blue);
	color: white;
}

</style>