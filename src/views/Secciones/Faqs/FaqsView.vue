<template>
	<div class="row menu-container">
		<TopMenu />
	</div>
	<div class="row header-container">
		<Headers />
	</div>
	<div class="row questions-container">
		<Questions />
	</div>
	<div class="row footer-container">
		<Footers />
	</div>
</template>

<script setup>
	import TopMenu from '../../../components/Shared/TopMenu.vue'
	import Headers from './Header.vue'
	import Questions from './Questions.vue'
	import Footers from '../../../components/Shared/Footer.vue'
	
</script>


<style scoped>
.header-container{
	height: 80%;
}
.questions-container{
	background-image: url('./../../../assets/images/bg-malla.png');
	background-size: cover;
	height: 90vh; background-color: white;
	overflow-y: auto;
}
.footer-container{
	height: 10vh; 
	background-color: #013F7A;
}

</style>

