<template>
	<div class="row h-100" style="justify-content: space-evenly;">
		<div class="col-6 bg-gris h-100" style="border-radius: 50px; padding: 4vh;">
			<p class="m-0" style="font-size: 25px;">Coste drivers e indicadores de mercado</p>
			<div class="row d-flex" style="height: 40vh; margin-top: 7vh; justify-content: space-evenly;">
				<div class="col-3 h-100" v-for="(item, index) in 3" :key="index">
					<div class="row bg-light-blue" style="height: 90%;">
					</div>
					<div class="row bg-blue1 mt-3" style="height: 10%;">
					</div>
				</div>
			</div>
		</div>
		<div class="col-6 h-100" style="border-radius: 50px; padding: 4vh;">
			<p class="m-0" style="font-size: 25px;">Coste drivers e indicadores de mercado</p>
			<div class="row h-100" style="padding: 4vh 0 4vh 0;">
				<div class="col-12 bg-blue1" style="border-radius: 40px;">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style>

</style>