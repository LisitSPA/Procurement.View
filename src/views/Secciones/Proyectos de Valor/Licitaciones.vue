<template>
	<div class="row">
		<div class="col-10 mx-auto">
			<div class="row my-5">
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="navigate('Licitaciones/Directos')">Directos</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="navigate('Licitaciones/Indirectos')">Indirectos</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="navigate('Licitaciones/Servicios')">Servicios</button>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<CalendarioLicitaciones/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router'
	import CalendarioLicitaciones from './../../../components/Shared/CalendarioLicitaciones.vue'

	const router = useRouter()

	const navigate = (option) => {
		router.push(option)
	}

</script>

<style>


</style>