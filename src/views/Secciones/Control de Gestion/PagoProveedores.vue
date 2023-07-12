<template>
	<div class="row h-100">
		<div class="col-12 mb-3">
			<div class="row">
				<div class="col-1 d-flex align-items-center justify-content-center">
					<i class="bi bi-bell-fill" style="font-size: 2.3rem; color: var(--light-blue)"></i>
				</div>
				<div class="col-8 bg-light-blue text-white d-flex align-items-center ps-5" style="border-radius: 50px; height: 5vh;">
					<span style="font-size: 18px;">Para acceder al panel y mantener el funcionamiendo adecando de las macros, es importante descargar y abrir el archivo excel desde tú ordenador.</span>
				</div>
			</div>
		</div>
		<div class="col mx-1" v-for="item in 4" :key="item">
			<ReportCardAge />
		</div>
	</div>
</template>

<script setup>
	import ReportCardAge from './../../../components/Shared/ReportCardAge.vue'

</script>

<style>

</style>