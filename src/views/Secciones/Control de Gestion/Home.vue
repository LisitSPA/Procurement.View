<template>
	<div class="row" style="height: 25%; margin-top:15vh;">
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="navigate('Reportes-Mensuales')">Reportes<br>Mensuales</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="navigate('Administracion-Contratos')">Panel de administración<br>de contratos Marco SAP</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="navigate('Contratos-Legales')">Panel de<br>contratos legales</button>
		</div>
	</div>
	<div class="row" style="height: 25%;">
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="navigate('/Not-Found')">Cost drivers e<br>Indicadores de mercado</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="navigate('Pago-Proveedores')">Panel de<br>pago a proveedores</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="navigate('/Not-Found')">Presupuestos</button>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router'

	const router = useRouter()

	const navigate = (option) => {
		router.push(option)
	}

</script>

<style>


</style>