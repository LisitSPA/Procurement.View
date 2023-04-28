<template>
	<div class="row h-100">
		<div class="col-3 bg-gris h-100" style="border-radius: 50px;">
			<p style="margin: 4vh 0 0 3vh; font-size: 25px;">Panel de contratos legales</p>
		</div>
		<div class="col-9">
			<div class="row mb-3" style="height: 47%; padding: 0 1rem 0 1rem;">
				<div class="col h-100 bg-light-blue" style="border-radius: 60px; margin-right: 1rem;">

				</div>
				<div class="col h-100 bg-blue1">
					<div class="row" style="height: 60%;">
						<div class="col d-flex align-items-center justify-content-center h-100">
							<span class="text-white" style="font-size: 18px;">Mayo 2023</span>
						</div>
					</div>
					<div class="row" style="height: 20%;">
						<div class="col d-flex align-items-center justify-content-center">
							<i class="bi bi-chevron-left light-blue-text cursor-pointer"></i>
						</div>
						<div class="col calendar cursor-pointer text-white" v-for="(item, index) in 7" :key="index">
							<div class="row text-center">
								<span>Lunes</span>
							</div>
							<div class="row text-center">
								<span>5</span>
							</div>
							<div class="row text-center">
								<i class="bi bi-calendar-event"></i>
							</div>
						</div>
						<div class="col d-flex align-items-center justify-content-center text-center">
							<i class="bi bi-chevron-right light-blue-text cursor-pointer"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="row" style="height: 50%; padding: 0 1rem 0 1rem;">
				<div class="col h-100 bg-gris" v-for="(item, index) in 7" :key="index" style="border-radius: 30px; margin-right: 1rem;">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>
.calendar:hover{
	background-color: var(--light-blue);
	color: white;
}
</style>