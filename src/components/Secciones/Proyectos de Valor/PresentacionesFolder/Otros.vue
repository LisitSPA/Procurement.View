<template>
	<div class="row h-100 d-flex align-content-center">
		<ReportCardTabs v-for="(item, index) in 4" :key="index"/>
	</div>
</template>

<script setup>
import ReportCardTabs from '../../../Shared/ReportCardTabs.vue';

</script>

<style>

</style>