<template>
	<div class="col h-100" style="margin-right: 1rem;">
		<div class="row" style="height: 10vh;">
			<div class="col-12 bg-gris d-flex justify-content-center align-items-center">
				<span class="fw-bold" style="font-size: 20px;">ELO</span>
			</div>
			<div class="col mx-1 mt-2 d-flex justify-content-center align-items-center cursor-pointer"
				:class="index == 0 ? 'bg-gris':'bg-gris2 text-white'"
				v-for="(item, index) in 3" :key="index">
				<span class="fw-bold" style="font-size: 20px;">202{{ index }}</span>
			</div>
		</div>
		<div class="row bg-gris p-4">
			<div class="col-12"  style="height: 40vh; overflow-y: scroll;">
				<div class="row my-3" v-for="(item, index) in 10" :key="index">
					<div class="col-10">
						<div class="form-group">
							<label style="margin-left: 1.5rem;">Marzo</label>
							<input class="form-control" type="text" value="Base Plan 2022" disabled style="background-color: #CCCCCC;">
						</div>
					</div>
					<div class="col-2">
						<div class="form-group">
							<label for=""></label>
							<div class="bg-gris2 d-flex justify-content-center align-items-center cursor-pointer" style="height: 40px;">
								<i class="bi bi-file-earmark-excel-fill" style="color: green; font-size: 1.5rem;"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script setup>

</script>

<style scoped>

</style>