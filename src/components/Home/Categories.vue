<template>
	<div class="col-12 d-flex justify-content-center align-items-center">
		<p class="title-section">Secciones/Categorias</p>
	</div>
	<div class="row" style="height: 30vh">
		<div class="col-12 d-flex justify-content-center align-items-center">
			<button class="btn btn-border-blue" @click="this.$router.push('/Colaboradores')">Colaboradores</button>
			<button class="btn btn-border-blue" @click="this.$router.push('/Control-Gestion')">Control de gestión</button>
			<button class="btn btn-border-blue" @click="this.$router.push('/Procurement-Excellence')">Procurement Excellence</button>
			<button class="btn btn-border-blue" @click="this.$router.push('/Proyectos-de-Valor')">Proyectos de Valor</button>
		</div>
		<div class="col-12 d-flex justify-content-center align-items-center">
			<button class="btn btn-border-blue">Sostenibilidad</button>
			<button class="btn btn-border-blue">Sistemas</button>
			<button class="btn btn-border-blue">Procurement Academy</button>
			<button class="btn btn-border-blue">Proveedores</button>
			<button class="btn btn-border-blue">Procurement 4.0</button>
		</div>
	</div>
	<div class="col-12 d-flex align-items-end justify-content-center">
		<p>Todo el contenido de este sitio, son informaciones internas del área de Procurement SOFTYS y de carácter confidencial.</p>
	</div>
</template>

<script setup>

</script>

<style scoped>
	.title-section{
		color: var(--dark-blue);
		font-size: 50px;
		font-weight: bold;
	}
	.btn-border-blue{
		height: 5vh;
		color: var(--dark-blue);
		border: 2px solid var(--dark-blue);
		margin-right: 10px;
		margin-left: 10px;
		width: 12vw;
		border-radius: 30px;
		font-weight: bold;
	}
	.btn-border-blue:hover{
		color: white;
		background-color: var(--light-blue);
	}
</style>