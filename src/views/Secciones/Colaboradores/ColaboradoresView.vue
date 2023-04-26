<template>
	<div class="row top-menu bg-gris">
		<TopMenu/>
	</div>
	<SectionMenu/>
	<div class="row malla">
		<div class="contenido">
			<!-- <HomeSection/> -->
			<!-- <Organigrama/> -->
			<Cumpleaños/>
		</div>
		<SectionFooter/>
	</div>

</template>

<script setup>
	import TopMenu from '../../../components/Shared/TopMenu.vue'
	import SectionMenu from '../../../components/Shared/SectionMenu.vue'
	import HomeSection from '../../../components/Secciones/Colaboradores/Home.vue'
	import Organigrama from '../../../components/Secciones/Colaboradores/Organigrama.vue'
	import Cumpleaños from '../../../components/Secciones/Colaboradores/Cumpleaños.vue'
	import SectionFooter from '../../../components/Shared/SectionFooter.vue'
	
</script>

<style>
.top-menu{
	height: 6vh; 
}
.contenido{
	margin-top: 5vh;
	width: 90vw;
	margin-left: auto;
	margin-right: auto;
	height: 65vh;
}
.malla{
	height: 79vh;
	background-image: url('./../../../assets/images/bg-malla.png');
	background-size: cover;
}

</style>