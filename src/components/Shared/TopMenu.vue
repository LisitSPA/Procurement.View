<template>
	<div class="col-6 d-flex align-items-center" style="padding-left: 5vw;">
		<i class="bi bi-person-circle user-image" :class="this.$route.path === '/Home'? 'text-white' : 'text-blue'"></i>
		<span :class="this.$route.path === '/Home'? 'text-white' : 'text-blue'">Nombre de usuario / Información del sitio</span>
	</div>
	<div class="col-6 d-flex align-items-center justify-content-end" style="padding-right: 5vw;">
		<button class="btn btn-border-lighblue" @click="this.$router.push('/Admin')"><i class="bi bi-power"></i> Cerrar sesión</button>
	</div>
</template>

<script setup>

</script>

<style scoped>
	.btn-border-lighblue{
		height: 4vh;
		color: var(--light-blue);
		border: 2px solid var(--light-blue);
		width: 8vw;
		border-radius: 30px;
		font-weight: bold;
	}
	.btn-border-lighblue:hover{
		color: white;
		background-color: var(--light-blue);
	}
	.user-image{
		font-size: 3vh;
		margin-right: 10px;
	}

</style>