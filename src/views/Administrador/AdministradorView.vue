<template>
	<div class="row top-menu bg-gris">
		<TopMenu/>
	</div>
	<AdminMenu />
	<div class="row malla-admin">
		<div class="contenido">
			<RouterView />
		</div>
		<SectionFooter/>
	</div>
</template>

<script setup>
	import TopMenu from '../../components/Shared/TopMenu.vue'
	import AdminMenu from '../../components/Shared/AdminMenu.vue'
	import SectionFooter from '../../components/Shared/SectionFooter.vue'

</script>

<style>

</style>