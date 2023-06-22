<template>
	<div class="col h-100 bg-gris2 cursor-pointer" style="margin-right: 1rem; border-radius: 40px;" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
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
	<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body" style="display: contents;">
					<img src="https://picsum.photos/800/500" alt="Imagen">
				</div>
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