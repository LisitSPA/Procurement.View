<template>
	<div class="col h-100 bg-gris2 cursor-pointer" style="margin-right: 1rem; border-radius: 40px;">
		<div class="row contenedor-imagen bg-blue1" style="border-radius: 40px;">
			<div class="col-12 d-flex justify-content-center align-items-center">
				<i class="bi bi-play-circle text-white" style="font-size: 6rem;"></i>
			</div>
		</div>
		<div class="row wea h-25">
			<div class="col-12 d-flex justify-content-center align-items-center">
				<span class="text-white">Dashboard Impact Tracker</span>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style>
.contenedor-imagen{
	height: 75%;
	transition: all 0.5s ease;
}
.contenedor-imagen:hover{
	height: 100%;
	transform: scale(100%);
}
</style>