<template>
	<div class="col-12 p-0 carousel" style="height: 100%;">
		<div class="slide" v-for="(slide, index) in slides" 
			:key="index" 
			:class="{ active: index === currentSlide }"
			:style="{ backgroundImage: 'url(' + slide + ')' }">
		</div>
		<div class="row" style="margin: 10vh 0 0 4vw">
			<div class="col-6 d-flex align-items-center">
				<router-link class="btn btn-lightblue" to="/Not-Found">Noticias / Newsletter</router-link>
				<router-link class="btn btn-white" to="/Not-Found">Preguntas frecuentes</router-link>
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
			<div class="col-11 cursor-pointer" @click="scrolltoCategories" style="display: inline-grid; justify-content: end; align-content: center; text-align: center;">
				<p style="font-size: 24px;">Secciones / Categorias</p>
				<i class="bi bi-chevron-down" style="color: var(--dark-blue); font-size: 3vh;"></i>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {ref, watch, onMounted} from 'vue'
	import header1 from '@/assets/images/header-1.jpg'
	import header2 from '@/assets/images/header-2.jpg'
	import header3 from '@/assets/images/header-3.jpg'

	const slides = ref([header1, header2, header3]);
	const currentSlide = ref(0);
	let slideInterval = null;

	const nextSlide = () => {
		currentSlide.value =  (currentSlide.value + 1) % slides.value.length;
	};

	const scrolltoCategories = () => {
		var div = document.getElementById('categories-section');
  	div.scrollIntoView({ behavior: 'smooth' });
	}

	onMounted(() => {
		slideInterval = setInterval(nextSlide, 3000);
		
		watch(currentSlide, () => {
			clearInterval(slideInterval);
			slideInterval = setInterval(nextSlide, 3000);
		});
	});

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
		display: flex;
		align-items: center;
		justify-content: center;
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
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btn-white:hover{
		background-color: var(--dark-blue);
	}
	.input-search{
		width: 15vw;
    border-radius: 30px;
    padding: 10px;
		height: 5vh;
		border: none;
	}

	.input-search:focus{
		outline: none;
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
	.carousel {
		overflow: hidden;
		position: relative;
	}
	.slide {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		transition: opacity 1s ease-in-out;
		position: absolute;
		opacity: 0;
	}
	.slide.active {
		opacity: 1;
	}
</style>