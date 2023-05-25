<template>
	<div class="row row-menu">
		<div class="col-9 menu">
			<router-link class="contenedor-btn h-100 d-flex justify-content-center align-items-center px-3 cursor-pointer"
				to="/Admin/Usuarios"
				:class="{ 'menu-selected': $route.path === '/Admin/Usuarios' }">
				<span><i class="bi bi-people" style="font-size: 1.5rem;"></i> Usuarios</span>
			</router-link>
			<router-link class="contenedor-btn h-100 d-flex justify-content-center align-items-center px-3 cursor-pointer"
				to="/Admin/Newsletters"
				:class="{ 'menu-selected': $route.path === '/Admin/Newsletters' }">
				<span><i class="bi bi-newspaper" style="font-size: 1.5rem;"></i> Newsletters</span>
			</router-link>
			<router-link class="contenedor-btn h-100 d-flex justify-content-center align-items-center px-3 cursor-pointer"
				to="/Admin/Organigrama"
				:class="{ 'menu-selected': $route.path === '/Admin/Organigrama' }">
				<span><i class="bi bi-bezier" style="font-size: 1.5rem;"></i> Organigrama</span>
			</router-link>
			<div class="contenedor-btn h-100 d-flex justify-content-center align-items-center px-3 cursor-pointer" @click="$emit('setSection', index)"
				v-for="(item, index) in 7" :key="index">
				<span><i class="bi bi-menu-app" style="font-size: 1.5rem;"></i> Módulo {{ index+1 }}</span>
			</div>
		</div>
		<div class="col-3 logo">
			<img src="./../../assets/images/logo-azul.png" alt="Logo procurement" style="width: 50%;">
		</div>
	</div>
</template>

<script setup>
	
</script>

<style scoped>
.menu{
	background-color: #ECEDF1;
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-radius: 0 50px 50px 0;
}
.row-menu{
	margin-top: 5vh;
	height: 5vh;
}
.logo{
	display: flex;
	justify-content: flex-end;
	padding-right: 5vw;
}
.contenedor-btn{
	color: var(--dark-blue);
}
.contenedor-btn:hover{
	color: white;
	background-color: var(--dark-blue);
}
.menu-selected{
	color: white;
	background-color: var(--dark-blue);
}
</style>