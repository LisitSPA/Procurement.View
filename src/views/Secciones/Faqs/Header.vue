<template>
	<div class="col-12 p-0 carousel" style="height: 100%;">
		<div class="slide" v-for="(slide, index) in slides" 
			:key="index" 
			:class="{ active: index === currentSlide }"
			:style="{ backgroundImage: 'url(' + slide + ')' }">
		</div>
		<div class="row" style="margin: 10vh 0 0 4vw">
			<div class="col-6 d-flex align-items-center">
				<router-link class="btn btn-white" to="/Not-Found">Noticias / Newsletter</router-link>
				<router-link class="btn btn-lightblue" to="/Preguntas-Frecuentes">Preguntas frecuentes</router-link>
				<input type="search" class="input-search" placeholder="Aquí puedes buscar...">
			</div>
			<div class="col-6 d-flex justify-content-end">
				<div class="row white-bar" @click="navigate('/Home')">
					<img src="./../../../assets/images/logo-azul.png" alt="Logo procurement" style="width: 70%;">
				</div>
			</div>
		</div>
		<div class="row" style="margin: 10vh 0 0 13vw; height: 16vh;">
			<div class="col-10">
				<p class="text-white m-0" style="font-size: 120px; font-weight: bold;">Preguntas frecuentes</p>
			</div>
		</div>
		<div class="row m-0 ola">
		</div>
	</div>
</template>

<script setup>
	import {ref, watch, onMounted} from 'vue'
	import { useRouter } from 'vue-router';
	import header1 from '@/assets/images/header-faq.jpg'

	const router = useRouter()
	const slides = ref([header1]);
	const currentSlide = ref(0);
	let slideInterval = null;

	const nextSlide = () => {
		currentSlide.value =  (currentSlide.value + 1) % slides.value.length;
	};

	onMounted(() => {
		slideInterval = setInterval(nextSlide, 3000);
		
		watch(currentSlide, () => {
			clearInterval(slideInterval);
			slideInterval = setInterval(nextSlide, 3000);
		});
	});

	const navigate = (url) => {
		router.push(url)
	}

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
		cursor: pointer;
	}
	.ola{
		background-image: url('./../../../assets/images/bg-ola-blanco.svg');
		height: 35vh;
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