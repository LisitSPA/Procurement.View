<template>
	<div class="row h-100" style="justify-content: space-evenly;">
		<div class="col-3">
			<div class="col mx-2 h-100" style="margin-right: 1rem;">
				<div class="row" style="height: 12vh;">
					<div class="col-12 bg-gris2 d-flex justify-content-center align-items-center age-container">
						<span class="fw-bold" style="font-size: 20px;">Drivers</span>
					</div>
				</div>
				<div class="row bg-gris p-4">
					<div class="col-12"  style="height: 40vh; overflow-y: scroll;">
						<div class="row my-3" v-for="(document, index) in documents" :key="index">
							<div class="col-10">
								<div class="form-group">
									<!-- <label style="margin-left: 1.5rem;">Marzo</label> -->
									<input class="form-control" type="text" :value="document.nombreArchivo" disabled style="background-color: #CCCCCC;">
								</div>
							</div>
							<div class="col-2">
								<div class="form-group">
									<!-- <label for=""></label> -->
									<div class="bg-gris2 d-flex justify-content-center align-items-center cursor-pointer" style="height: 40px;"
										@click="downloadFile(document)">
										<!-- <i class="bi bi-file-earmark-excel-fill" style="color: green; font-size: 1.5rem;"></i> -->
										<div v-if="loading && selectedDocument === document" class="spinner-border text-primary" role="status">
											<span class="sr-only"></span>
										</div>
										<i v-else class="bi bi-file-earmark-arrow-down" style="font-size: 1.5rem;"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col ms-2 h-100" v-for="(item, index) in 3" :key="index">
			<RepordCard />
		</div>
	</div>
</template>

<script setup>
	import RepordCard from './../../../components/Shared/ReportCard.vue'

</script>

<style>

</style>