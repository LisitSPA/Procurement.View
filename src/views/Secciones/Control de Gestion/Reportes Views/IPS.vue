<template>
	<div class="row h-100 d-flex align-content-center">
		<ReportCard :documents="documents"/>
	</div>
</template>

<script setup>
	import ReportCard from './../../../../components/Shared/ReportCard.vue';

	import { ref } from 'vue'
	import projectsServices from '../../../../services/Projects';

	const documents = ref([])

	const getProjects = async() => {
		try {
			const res = await projectsServices.getProjects()
			documents.value = res.data.filter(element => element.tipoDocumento == "IPS")
		} catch (error) {
			console.log(error)
		}
	}

	getProjects()
</script>

<style>

</style>