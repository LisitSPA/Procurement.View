<template>
	<div class="col-12 p-0 carrusel" style="height: 100%;">
		<div class="row" style="margin: 10vh 0 0 4vw">
			<div class="col-6 d-flex align-items-center">
				<button class="btn btn-lightblue">Noticias / Newsletter</button>
				<button class="btn btn-white">Preguntas frecuentes</button>
				<input type="search" class="input-search" placeholder="Aquí puedes buscar...">
			</div>
			<div class="col-6 d-flex justify-content-end">
				<div class="row white-bar">
					<img src="./../../assets/images/logo-azul.png" alt="Logo procurement" style="width: 70%;">
				</div>
			</div>
		</div>
		<div class="row" style="margin: 10vh 0 0 13vw; height: 34vh;">
			<div class="col-10">
				<p class="text-white m-0" style="font-size: 120px; font-weight: bold;">Título de Noticias</p>
				<p class="text-white" style="font-size: 37px; font-weight: bold; margin-top: -2vh;">Descripción de noticias</p>
			</div>
		</div>
		<div class="row m-0 ola">
			<div class="col-11" style="display: inline-grid; justify-content: end; align-content: center; text-align: center;">
				<p style="font-size: 24px;">Secciones / Categorias</p>
				<i class="bi bi-chevron-down" style="color: var(--dark-blue); font-size: 3vh;"></i>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>
	.btn-lightblue{
		height: 5vh;
		color: white;
		border: 2px solid var(--light-blue);
		margin-right: 10px;
		margin-left: 10px;
		width: 12vw;
		background-color: var(--light-blue);
		border-radius: 30px;
		font-weight: bold;
	}
	.btn-white{
		height: 5vh;
		color: white;
		border: 2px solid white;
		margin-right: 10px;
		margin-left: 10px;
		width: 12vw;
		border-radius: 30px;
		font-weight: bold;
	}
	.btn-white:hover{
		background-color: var(--dark-blue);
	}
	.input-search{
		width: 15vw;
    border-radius: 30px;
    padding: 10px;
		height: 5vh;
	}

	.white-bar{
		width: 25vw;
    background-color: white;
    border-radius: 60px 0 0 60px;
    height: 10vh;
    display: flex;
    align-content: center;
		justify-content: center;
	}
	.ola{
		background-image: url('./../../assets/images/bg-ola-blanco.svg');
		height: 30vh;
		background-size: cover;
	}
	.carrusel{
		background-image: url('./../../assets/images/header-1.jpg');
		background-size: cover;
	}
</style>