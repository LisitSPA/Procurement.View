<template>
	<div class="row h-100">
		<div class="col-12">
			<div class="row h-100">
				<div class="col-6 bg-gris" style="border-radius: 20px;">
				</div>	
			</div>	
		</div>
		<div class="col-9 px-4">
			
			<div class="row mt-2" v-for="(item, index) in 6" :key="index">
				<div class="col-12" :class="(index % 2 === 0) ? 'bg-gris' : 'bg-blue1'" style="height: 8vh; border-radius: 20px;">
				</div>
			</div>
		</div>
		<div class="col-3 bg-light-blue" style="border-radius: 50px;">
		</div>
	</div>
</template>

<script setup>

</script>

<style>


</style>