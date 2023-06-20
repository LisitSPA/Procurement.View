<template>
	<div class="row" style="height: 25%; margin-top:15vh;">
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('Reportes-Mensuales')">Reportes<br>Mensuales</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('Administracion-Contratos')">Panel de administración<br>de contratos Marco SAP</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('/Not-Found')">Panel de<br>contratos legales</button>
		</div>
	</div>
	<div class="row" style="height: 25%;">
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('/Not-Found')">Coste drivers e<br>Indicadores de mercado</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('/Not-Found')">Panel de<br>pago a proveedores</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('/Not-Found')">Presupuestos</button>
		</div>
	</div>
</template>

<script setup>

</script>

<style>


</style>