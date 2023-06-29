<template>
	<div class="row h-100 bg-gris p-5">
		<img :src="organigrama.urlsImagenes[0]" alt="Organigrama">
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import newslettersServices from '../../../services/Newsletters';

	const organigrama = ref()

	const getOrganigrama = async() => {
		try{
			const res = await newslettersServices.getOrganigrama()
			organigrama.value = res.data
		}catch(error){
			console.log(error)
		}
	}

	getOrganigrama()

</script>

<style>

</style>