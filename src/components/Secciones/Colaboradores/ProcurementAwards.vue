<template>
	<div class="row h-100">
		<div class="col-12" style="height: 20%; margin-top: 15vh;">
			<div style="justify-content: space-evenly; display: flex;">
				<span class="bg-celeste custom-categorias" v-for="(items, index) in [1,2,3,4,5,6,7,8]" :key="index">Categorias</span>
			</div>
		</div>
		<div class="col-12" style="height: 40%; padding-bottom: 1rem;">
			<div class="row h-100">
				<div class="col">
					<div class="row h-100">
						<div class="col-2 align-self-center">
							<span class="fw-bold" style="font-size: 21px;">Procurement</span><br>
							<span class="fw-bold" style="font-size: 21px;">Awards</span>
						</div>
						<div class="col bg-gris mx-2 poligon" v-for="(items, index) in [1,2,3,4]" :key="index">
							<div class="row d-flex align-content-center" style="height: 70%;">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81.733" height="95.414" viewBox="0 0 81.733 95.414">
									<defs>
										<clipPath id="clip-path">
											<rect id="Rectángulo_100" data-name="Rectángulo 100" width="81.733" height="95.414" fill="#fff"/>
										</clipPath>
									</defs>
									<g id="Grupo_39" data-name="Grupo 39" clip-path="url(#clip-path)">
										<path id="Trazado_9" data-name="Trazado 9" d="M40.7,121.031c-9.8,0-19.6.037-29.4-.012-8.387-.041-12.857-5.836-10.8-13.9C1.56,102.956,2.58,98.782,3.75,94.651A34.936,34.936,0,0,1,20.682,73.188a3.993,3.993,0,0,1,4.674.162c10.3,6.319,20.75,6.311,31.043-.01a4,4,0,0,1,4.675-.145C70.4,78.51,76.084,86.5,78.638,96.835c.85,3.439,1.741,6.867,2.6,10.3,2.037,8.1-2.406,13.843-10.822,13.883-9.908.047-19.816.011-29.724.011" transform="translate(0 -25.63)" fill="#fff"/>
										<path id="Trazado_10" data-name="Trazado 10" d="M50.388,0A23.611,23.611,0,0,1,73.937,23.692c-.082,12.938-10.948,23.749-23.753,23.635A23.9,23.9,0,0,1,26.645,23.489,23.6,23.6,0,0,1,50.388,0" transform="translate(-9.418 0)" fill="#fff"/>
									</g>
								</svg>
							</div>
							<div class="row px-3" style="height: 30%; font-size: 16px;">
								<span>Nombre</span><br>
								<span>Apellido</span>
							</div>

						</div>
					</div>
				</div>
				<div class="col">
					<div class="row h-100">
						<div class="col-2 align-self-center">
							<span class="fw-bold" style="font-size: 21px;">Procurement</span><br>
							<span class="fw-bold" style="font-size: 21px;">Awards</span>
						</div>
						<div class="col bg-gris mx-2 poligon" v-for="(items, index) in [1,2,3,4]" :key="index">
							<div class="row d-flex align-content-center" style="height: 70%;">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81.733" height="95.414" viewBox="0 0 81.733 95.414">
									<defs>
										<clipPath id="clip-path">
											<rect id="Rectángulo_100" data-name="Rectángulo 100" width="81.733" height="95.414" fill="#fff"/>
										</clipPath>
									</defs>
									<g id="Grupo_39" data-name="Grupo 39" clip-path="url(#clip-path)">
										<path id="Trazado_9" data-name="Trazado 9" d="M40.7,121.031c-9.8,0-19.6.037-29.4-.012-8.387-.041-12.857-5.836-10.8-13.9C1.56,102.956,2.58,98.782,3.75,94.651A34.936,34.936,0,0,1,20.682,73.188a3.993,3.993,0,0,1,4.674.162c10.3,6.319,20.75,6.311,31.043-.01a4,4,0,0,1,4.675-.145C70.4,78.51,76.084,86.5,78.638,96.835c.85,3.439,1.741,6.867,2.6,10.3,2.037,8.1-2.406,13.843-10.822,13.883-9.908.047-19.816.011-29.724.011" transform="translate(0 -25.63)" fill="#fff"/>
										<path id="Trazado_10" data-name="Trazado 10" d="M50.388,0A23.611,23.611,0,0,1,73.937,23.692c-.082,12.938-10.948,23.749-23.753,23.635A23.9,23.9,0,0,1,26.645,23.489,23.6,23.6,0,0,1,50.388,0" transform="translate(-9.418 0)" fill="#fff"/>
									</g>
								</svg>
							</div>
							<div class="row px-3" style="height: 30%; font-size: 16px;">
								<span>Nombre</span><br>
								<span>Apellido</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.custom-categorias{
	font-size: 21px;
	width: 7vw;
	height: 5vh;
	color: white;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}
.poligon{
	clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}

</style>