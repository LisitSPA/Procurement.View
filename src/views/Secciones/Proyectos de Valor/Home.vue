<template>
	<div class="row" style="height: 25%; margin-top:15vh;">
		<div class="col-10 mx-auto">
			<div class="row h-100">
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="$emit('updateContent', 'impact-tracker')">Impact Tracker</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="$emit('updateContent', 'informes-mensuales')">Informes Mensuales</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="$emit('updateContent', 'presentaciones')">Presentaciones</button>
				</div>
			</div>
		</div>
	</div>
	<div class="row" style="height: 25%;">
		<div class="col-12 mx-auto">
			<div class="row h-100">
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="$emit('updateContent', 'manual')">Manual</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="$emit('updateContent', 'planes-ahorro')">Planes de Ahorro</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="$emit('updateContent', 'reunion-plt')">Reunión PLT</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="$emit('updateContent', 'licitaciones')">Licitaciones</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style>


</style>