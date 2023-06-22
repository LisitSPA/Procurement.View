<template>
	<div class="row h-100">
		<div class="col-12 bg-gris2 p-4" style="height: 40vh;">
			<p class="text-white fw-bold m-0" style="font-size: 18px;">Impact Tracker</p>
			<p class="">Visualizador de Impact Tracker</p>
		</div>
		<div class="col-12">
			<div class="row h-100">
				<div class="col bg-gris d-flex justify-content-center align-items-center cursor-pointer country-filter"
					:class="{'selected-country': selectedCountry === item}"
				 	v-for="(item, index) in countries" :key="index"
					@click="selectedCountry = item">
					<span class="fw-bold" style="font-size: 18px;">{{ item }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {ref} from 'vue'
	const countries = ['Argentina','Brasil','Chile','Colombia','Ecuador','México','Perú','Uruguay']
	const selectedCountry = ref('Argentina')

</script>

<style scoped>
.text{
	font-size:35px; 
	writing-mode: vertical-rl; 
	text-orientation: sideways; 
	transform: rotate(-180deg);
	color: #1DB7C1;
}
.country-filter{
	margin-right: 1rem;
	height: 8vh;
}
.country-filter:hover{
	background-color: var(--dark-blue);
	color: white;
}

.selected-country{
	background-color: var(--dark-blue);
	color: white;
}

</style>