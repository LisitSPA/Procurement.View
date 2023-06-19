<template>
	<div class="row" style="height: 25%; margin-top:15vh;">
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('Reportes-Mensuales')">Reportes<br>Mensuales</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('Administracion-Contratos')">Panel de administración<br>de contratos Marco SAP</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('Contratos-legales')">Panel de<br>contratos legales</button>
		</div>
	</div>
	<div class="row" style="height: 25%;">
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('Coste-Drivers')">Coste drivers e<br>Indicadores de mercado</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('Pago-Proveedores')">Panel de<br>pago a proveedores</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="this.$router.push('Presupuestos')">Presupuestos</button>
		</div>
	</div>
</template>

<script setup>

</script>

<style>


</style>