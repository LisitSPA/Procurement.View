<template>
	<div class="col">
		<div class="row">
			<div class="col-2 d-flex justify-content-center align-items-center mx-3">
				<select class="select-year" name="" id="">
					<option value="" selected>Seleccionar año</option>
					<option value="" v-for="(item, index) in 5" :key="index">202{{ index + 1 }}</option>
				</select>
			</div>
			<div class="col bg-gris2 text-white d-flex justify-content-center align-items-center mx-1 vh-5"
				v-for="(item, index) in months" :key="index">
				<span class="fw-bold" style="font-size: 1.2rem;">{{ item }}</span>
			</div>
		</div>
		<div class="row my-1" v-for="(item, index) in 6" :key="index">
			<div class="col-2 mx-3 d-flex align-items-center text-white px-4 cursor-pointer vh-5"
				:class="index == 1 ? 'bg-dark-blue' : 'bg-gris2'">
				<span style="font-size: 1rem;">Item {{ index + 1 }}</span>
			</div>
			<div class="col bg-gris text-white d-flex justify-content-center align-items-center mx-1 vh-5"
				v-for="(item, index) in months" :key="index">
			</div>
		</div>
	
	</div>
	
</template>

<script setup>
	const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
</script>

<style scoped>
 .select-year{
	background-color: white;
	color: var(--dark-blue);
	font-weight: bold;
	border-radius: 50px;
	border-color: var(--dark-blue);
	width: 100%;
	height: 3vh;
	padding-left: 1rem;
 }
 .vh-5{
	height: 5vh;
 }
</style>