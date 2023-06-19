<template>
	<div class="row" style="height: 25%; margin-top:15vh;">
		<div class="col-10 mx-auto">
			<div class="row h-100">
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Presentaciones/Otros')">Otros</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Presentaciones/Comites')">Presentaciones Comités</button>
				</div>
				<div class="col d-flex justify-content-center align-items-center">
					<button class="btn btn-section-menu" @click="this.$router.push('Presentaciones/Seguimiento')">Seguimiento Iniciativas L0-L3</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style>


</style>