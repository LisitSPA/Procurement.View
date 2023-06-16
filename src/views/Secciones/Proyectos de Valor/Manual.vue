<template>
	<div class="row" style="height: 50%; margin-top:15vh;">
		<PreviewVideoCard v-for="(item, index) in 4" :key="index"/>
	</div>
</template>

<script setup>
	import PreviewVideoCard from '../../../components/Shared/PreviewVideoCard.vue';

</script>

<style>


</style>