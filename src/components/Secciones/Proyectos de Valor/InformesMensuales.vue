<template>
	<div class="row h-100 d-flex align-content-center">
		<ReportCard v-for="(item, index) in 4" :key="index"/>
	</div>
</template>

<script setup>
	import ReportCard from '../../../components/Shared/ReportCard.vue';

</script>

<style>

</style>