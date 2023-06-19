<template>
	<div class="row" style="height: 25%; margin-top:15vh;">
		<div class="col-10 mx-auto">
			<div class="row h-100">
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Impact-Tracker')">Impact Tracker</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Informes-Mensuales')">Informes Mensuales</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Presentaciones')">Presentaciones</button>
				</div>
			</div>
		</div>
	</div>
	<div class="row" style="height: 25%;">
		<div class="col-12 mx-auto">
			<div class="row h-100">
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Manual')">Manual</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Planes-Ahorro')">Planes de Ahorro</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Reunion-PLT')">Reunión PLT</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Licitaciones')">Licitaciones</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style>


</style>