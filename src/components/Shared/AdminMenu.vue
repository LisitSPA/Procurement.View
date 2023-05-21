<template>
	<div class="row row-menu">
		<div class="col-9 menu">
			<button class="btn-border-blue" @click="$emit('setSection', 'usuarios')">Usuarios</button>
			<button class="btn-border-blue" @click="$emit('setSection', index)"
				v-for="(item, index) in 8" :key="index">Módulo {{ index+1 }}</button>
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

.btn-border-blue{
		height: 3vh;
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