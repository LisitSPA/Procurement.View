<template>
	<div class="row" style="height: 25%; margin-top:15vh;">
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="$emit('updateContent', 'reportes-mensuales')">Reportes<br>Mensuales</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="$emit('updateContent', 'administracion-contratos')">Panel de administración<br>de contratos Marco SAP</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="$emit('updateContent', 'contratos-legales')">Panel de<br>contratos legales</button>
		</div>
	</div>
	<div class="row" style="height: 25%;">
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="$emit('updateContent', 'coste-drivers')">Coste drivers e<br>Indicadores de mercado</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu" @click="$emit('updateContent', 'pago-proveedores')">Panel de<br>pago a proveedores</button>
		</div>
		<div class="col d-flex justify-content-center align-items-center">
			<button class="btn btn-section-menu">Presupuesto</button>
		</div>
	</div>
</template>

<script setup>

</script>

<style>


</style>