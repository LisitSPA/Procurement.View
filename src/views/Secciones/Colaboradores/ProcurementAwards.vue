<template>
	<div class="row h-100" style="padding-top: 5rem;">
		<div class="col-2">
			<div class="row">
				<div class="col-12 dark-blue-text">
					<label for="">Selecciona el año</label>
					<select class="form-control custom-select" name="" id="">
						<option value="">2023</option>
					</select>
				</div>
				<div class="col-12 mt-2 dark-blue-text">
					<label for="">Selecciona participación</label>
					<select class="form-control custom-select" name="" id="">
						<option value="" selected disabled>-</option>
						<option value="">Individual</option>
						<option value="">Equipo</option>
						<option value="">Especial</option>
					</select>
				</div>
				<div class="col-12 mt-2 dark-blue-text">
					<label for="">Selecciona ubicación</label>
					<select class="form-control custom-select" name="" id="">
						<option value="" selected disabled>-</option>
						<option value="">Regional</option>
						<option value="">Local</option>
					</select>
				</div>
				<div class="col-12 mt-4">
					<div class="mt-2 custom-categorias" 
						:class="{'selected-category': selectedCategory === index}"
						v-for="(category, index) in 5" 
						:key="index"
						@click="selectedCategory = index">
						<span>Categoría</span>
					</div>
				</div>
			</div>

		</div>
		<div class="col px-5">
			<div class="row">
				<div class="col">
					<b style="font-size: 1.5rem;">Procurement Awards</b>
				</div>
			</div>
			<div class="row h-25">
				<div class="col">
					<b style="font-size: 4rem;">Título de categoría</b>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<p>
						Lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus, purus phasellus curae suspendisse sed eu cum, vel curabitur commodo suscipit euismod pulvinar netus. Curae diam imperdiet vivamus eget congue venenatis nullam, hendrerit cursus cubilia mauris ultrices ut, sociis ornare eu tristique a eros. Laoreet senectus vehicula pulvinar blandit nisi eros tempor, mi nec accumsan inceptos proin justo, sodales augue litora fermentum eleifend pretium.
					</p>
					<p>
						Fermentum suspendisse interdum quisque vel lobortis class placerat nunc odio, diam imperdiet tellus iaculis varius dis lacinia duis. Tincidunt integer aliquam maecenas iaculis class tempus taciti, lectus pellentesque bibendum lacus placerat senectus facilisis, interdum rhoncus vivamus facilisi nisi nibh. Habitant vestibulum eros dignissim class ornare commodo hendrerit, sapien habitasse suspendisse maecenas at eleifend, primis morbi aenean nisi proin porttitor. Ad penatibus gravida diam hac praesent commodo nam netus pharetra, feugiat himenaeos lobortis nec potenti tincidunt magna convallis cubilia etiam, odio maecenas quis cum luctus eros donec primis.
					</p>
				</div>
			</div>
		</div>
		<div class="col-2">
			<div class="row h-50">
				<div class="col-12 bg-gris d-flex justify-content-center align-items-center">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78.075" height="91.143" viewBox="0 0 78.075 91.143" style="height: 10rem; width: 10rem;">
						<defs>
							<clipPath id="clip-path">
								<rect id="Rectángulo_100" data-name="Rectángulo 100" width="78.075" height="91.143" fill="#fff"/>
							</clipPath>
						</defs>
						<g id="Grupo_39" data-name="Grupo 39" clip-path="url(#clip-path)">
							<path id="Trazado_9" data-name="Trazado 9" d="M38.875,118.859c-9.362,0-18.723.035-28.084-.011-8.012-.04-12.281-5.574-10.315-13.28,1.014-3.975,1.989-7.962,3.106-11.908a33.372,33.372,0,0,1,16.174-20.5,3.814,3.814,0,0,1,4.465.155c9.838,6.036,19.821,6.029,29.654-.009a3.821,3.821,0,0,1,4.466-.138c8.907,5.076,14.338,12.708,16.777,22.581.812,3.285,1.663,6.56,2.488,9.841,1.946,7.736-2.3,13.224-10.338,13.261-9.464.044-18.929.01-28.393.01" transform="translate(0 -27.729)" fill="#fff"/>
							<path id="Trazado_10" data-name="Trazado 10" d="M49.325,0A22.554,22.554,0,0,1,71.82,22.632c-.078,12.359-10.457,22.686-22.69,22.577A22.833,22.833,0,0,1,26.645,22.437,22.54,22.54,0,0,1,49.325,0" transform="translate(-10.189 0)" fill="#fff"/>
						</g>
					</svg>
				</div>
			</div>
			<div class="row h-25">
				<div class="col-12 bg-dark-blue text-white text-center py-2" style="height: 50%; font-size: 1.2rem;">
					<p class="m-0">Nombre Apellido</p>
					<b>Cargo</b>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const selectedCategory = ref(0)
</script>

<style scoped>
.custom-categorias{
	height: 3vh;
	color: var(--dark-blue);
	cursor: pointer;
	padding-left: 10px;
	display: flex;
	align-items: center;
	background-color: var(--light-gris);
}
.custom-categorias:hover{
	background-color: var(--light-blue);
	color: white;
	width: 19.5rem;
}
.custom-select{
	background-color: var(--light-gris);
	color: var(--dark-blue);
	font-weight: bold;
	border-radius: 0;
}
.selected-category{
	background-color: var(--light-blue);
	color: white;
	width: 19.5rem;
}

</style>