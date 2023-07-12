<template>
	<div class="row" style="height: 8%;">
		<div class="col-12 bg-blue1 text-white d-flex align-items-center bg-img">
			<span>Para una mejor visualización y análisis te proporcionamos los datos actualizados en el siguiente dashboard. haz clic en la siguiente imagen y ¡conócelo!</span>
		</div>
	</div>
	<div class="row mt-4" style="height: 90%;">
		<div class="col-3">
			<ReportCard :documents="documents"/>
		</div>
		<div class="col bg-gris ms-5">
			
		</div>
	</div>
</template>

<script setup>
	import ReportCard from './../../../components/Shared/ReportCard.vue'
	import { ref } from 'vue'
	import projectsServices from './../../../services/Projects';

	const documents = ref([])

	const getProjects = async() => {
		try {
			const res = await projectsServices.getProjects()
			documents.value = res.data.filter(element => element.tipoDocumento == "BRIDGE DE GASTOS DE SOFTYS")
		} catch (error) {
			console.log(error)
		}
	}

	getProjects()

</script>

<style scoped>
.calendar:hover{
	background-color: var(--light-blue);
	color: white;
}
</style>