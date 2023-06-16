<template>
	<div class="row h-100">
		<div class="col-1 d-flex align-self-center justify-content-center">
			<p class="m-0 text"><b>NUEVOS INGRESOS</b> MES DE ABRIL</p>
		</div>
		<div class="col px-5" v-for="(items, index) in [1,2,3,4,5]" :key="index" style="display: flow-root; text-align: -webkit-center;">
			<div class="row bg-gris d-flex align-items-center" style="height: 40%; clip-path: circle(40% at 50% 50%);">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78.075" height="91.143" viewBox="0 0 78.075 91.143">
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
			<div class="row bg-gris" style="height: 5%; width: 7vw;">
				<p class="m-0 text-gris2" style="font-size: 17px;">12 abril 23</p>
			</div>
			<div class="row bg-gris" style="height: 55%;">
			</div>
		</div>
		<div class="col-1">
			<div class="row h-100">
				<div class="col-12 my-2 bg-gris d-flex align-items-center justify-content-center cursor-pointer month"
					:class="{'selected': selectedMonth === item}"
					v-for="(item, index) in months" 
					:key="index"
					@click="selectedMonth = item">
					<span>{{ item }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	const months = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE']
	const selectedMonth = ref('ENERO') 
</script>

<style scoped>
.text{
	font-size:35px; 
	writing-mode: vertical-rl; 
	text-orientation: sideways; 
	transform: rotate(-180deg);
	color: #1DB7C1;
}
.month:hover{
	background-color: var(--dark-blue);
	color: white;
}
.selected{
	background-color: var(--dark-blue);
	color: white;
}

</style>