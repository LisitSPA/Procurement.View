<template>
	<div class="row" style="height: 25%; margin-top:15vh;">
		<div class="col-7 mx-auto">
			<div class="row h-100">
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="$emit('updateSubContent', 'bridge')">Bridge<br>de gastos de SOFTYS</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="$emit('updateSubContent', 'ips')">IPS</button>
				</div>
			</div>
		</div>
	</div>
	<div class="row" style="height: 25%;">
		<div class="col-7 mx-auto">
			<div class="row h-100">
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="$emit('updateSubContent', 'gestion-procurement')">Informe<br>Gestión Procurement</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="$emit('updateSubContent', 'variacion-precios')">Variación Precios</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style>


</style>