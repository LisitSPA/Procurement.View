<template>
	<div class="row" style="height: 6vh; background-color: #013F7A;">
		<TopMenu />
	</div>
	<div class="row" style="height: 94vh">
		<Header />
	</div>
	<div class="row malla" style="height: 90vh; background-color: white;">
		<Categories />
	</div>
	<div class="row" style="height: 10vh; background-color: #013F7A;">
		<Footer />
	</div>
</template>

<script setup>
	import TopMenu from '../../components/Shared/TopMenu.vue'
	import Header from '../../components/Home/Header.vue'
	import Categories from '../../components/Home/Categories.vue'
	import Footer from '../../components/Shared/Footer.vue'
	
	defineProps({
		msg: {
			type: String,
			required: true
		}
	})
</script>


<style scoped>

.malla{
		background-image: url('./../../assets/images/bg-malla.png');
		background-size: cover;
}

</style>

