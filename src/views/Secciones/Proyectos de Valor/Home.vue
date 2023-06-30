<template>
	<div class="row" style="height: 25%; margin-top:15vh;">
		<div class="col-10 mx-auto">
			<div class="row h-100">
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="navigate('Impact-Tracker')">Impact Tracker</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="navigate('Informes-Mensuales')">Informes Mensuales</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="navigate('Presentaciones')">Presentaciones</button>
				</div>
			</div>
		</div>
	</div>
	<div class="row" style="height: 25%;">
		<div class="col-12 mx-auto">
			<div class="row h-100">
				<!-- <div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="navigate('Manual')">Manual</button>
				</div> -->
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="navigate('Planes-Ahorro')">Planes de Ahorro</button>
				</div>
				<!-- <div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="navigate('Reunion-PLT')">Reunión PLT</button>
				</div> -->
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="navigate('Licitaciones')">Licitaciones</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router'

	const router = useRouter()

	const navigate = (option) => {
		router.push(option)
	}

</script>

<style>


</style>