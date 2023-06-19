<template>
	<div class="row" style="height: 25%; margin-top:15vh;">
		<div class="col-7 mx-auto">
			<div class="row h-100">
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Reportes-Mensuales/Bridge')">Bridge<br>de gastos de SOFTYS</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Reportes-Mensuales/IPS')">IPS</button>
				</div>
			</div>
		</div>
	</div>
	<div class="row" style="height: 25%;">
		<div class="col-7 mx-auto">
			<div class="row h-100">
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Reportes-Mensuales/Gestion-Procurement')">Informe<br>Gestión Procurement</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Reportes-Mensuales/Variacion-Precios')">Variación Precios</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style>


</style>