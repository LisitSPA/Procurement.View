<template>
	<div class="row top-menu bg-gris">
		<TopMenu/>
	</div>
	<SectionMenu />
	<div class="row malla">
		<div class="contenido">
			<RouterView />
		</div>
		<SectionFooter/>
	</div>

</template>

<script setup>
	import TopMenu from '../../../components/Shared/TopMenu.vue'
	import SectionMenu from '../../../components/Shared/SectionMenu.vue'
	import SectionFooter from '../../../components/Shared/SectionFooter.vue'

</script>

<style>

</style>