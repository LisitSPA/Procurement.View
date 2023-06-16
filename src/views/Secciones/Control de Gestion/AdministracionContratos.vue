<template>
	<div class="row h-100" style="justify-content: space-evenly;">
		<div class="col-3 bg-gris h-100" style="border-radius: 50px;">
			<p style="margin: 4vh 0 0 3vh; font-size: 25px;">Administración de Contratos MARCO</p>
		</div>
		<div class="col-3 bg-gris h-100">
			<div class="row px-4 py-5">
				<div class="col-12">
					<span style="font-size: 25px;">Perfil</span>
				</div>
				<div class="col-4 bg-gris2" style="clip-path: circle(40% at 50% 50%); height: 10vh;">
				</div>
				<div class="col-8">
					<div class="row h-100">
						<div class="col-12" style="text-align:end; align-self: self-end">
							<span style="font-size: 21px;">Nombre/empresa</span>
						</div>
						<div class="col-12" style="text-align:end;">
							<i class="bi bi-star-fill mx-1" v-for="(itme,index) in [1,2,3,4]" :key="index" style="color: var(--light-blue);"></i>
							<i class="bi bi-star-fill text-white"></i>
						</div>
					</div>
				</div>
				<div class="col-12 mt-2 bg-gris2" style="height: 10vh;">

				</div>
			</div>
			<div class="row px-4" style="height: 15vh;">
				<div class="col-3 d-flex align-items-center" style="font-size: 2rem;">
					<i class="bi bi-envelope"></i>
				</div>
				<div class="col-9 d-flex align-items-center justify-content-end">
					<span>contaco@gmail.com</span>
				</div>
				<div class="col-3 d-flex align-items-center" style="font-size: 2rem;">
					<i class="bi bi-phone"></i>
				</div>
				<div class="col-9 d-flex align-items-center justify-content-end">
					<span>+012345678000</span>
				</div>
				<div class="col-3 d-flex align-items-center" style="font-size: 2rem;">
					<i class="bi bi-geo-alt"></i>
				</div>
				<div class="col-9 d-flex align-items-center justify-content-end">
					<span>Dirección #000, ciudad, País</span>
				</div>
			</div>
			<div class="row px-4 py-5">
				<div class="col-12 d-flex justify-content-center">
					<button class="btn boton bg-light-blue">Botón</button>
				</div>
				<div class="col-12 d-flex justify-content-center align-items-center" style="height: 5vh;">
					<span class="cursor-pointer">Mensaje</span>
				</div>
			</div>
		</div>
		<div class="col-5 h-100">
			<div class="row h-100">
				<div class="col-12 bg-gris2 mb-3" v-for="(item,index) in [1,2,3]" :key="index" style="border-radius: 50px;">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style>
.boton{
	width: 15vw;
	height: 4vh;
	border-radius: 30px;
	color: white;
}

.boton:hover{
	border: 2px solid var(--dark-blue);
}

</style>