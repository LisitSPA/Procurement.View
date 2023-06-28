<template>
	<div class="row h-100">
		<div class="col-12" style="height: 20%;">
			<p style="font-size: 21px;">Selector mensual de cumpleaños</p>
			<div style="justify-content: space-evenly; display: flex;">
				<span class="badge bg-gris custom-badgage"
					v-for="(item, index) in months"
					:key="index"
					:class="{'selected': selectedMonth.name === item.name}"
					@click="selectedMonth = item">
					{{item.name}}
				</span>
			</div>
		</div>
		<div class="col-12" style="height: 40%; padding-bottom: 1rem;">
			<div class="row h-100">
				<div class="col-2 bg-dark-blue d-flex justify-content-center align-items-center" style="height: 10vh; border-radius: 30px">
					<span class="text-white" style="font-size: 19px;">{{selectedMonth.name}}</span>
				</div>
				<div class="col mx-2 bg-gris" v-for="(items,index) in [1,2,3,4,5,6]" :key="index" style="border-radius: 30px;">
					<div class="row w-100 m-0 content-user-image text-end">
						<span class="mt-4 fw-bold text-blue2" style="font-size: 21px;">01</span>
					</div>
					<div class="row bg-dark-blue d-flex align-items-center justify-content-center content-username">
						<span class="text-white text-center" style="font-size: 11px;">Nombre Apellido</span>
					</div>
				</div>
				<div class="col bg-gris" style="border-radius: 30px;">
					<div class="row w-100 m-0 content-user-image d-flex align-items-center">
						<i class="bi bi-caret-right-fill text-center" style="font-size: 3rem;"></i>
					</div>
					<div class="row bg-dark-blue d-flex align-items-center justify-content-center content-username">
					</div>
				</div>
			</div>
		</div>
		<div class="col-12" style="height: 40%;">
			<div class="row h-100">
				<div class="col-2 bg-gris2 d-flex justify-content-center align-items-center" style="height: 10vh; border-radius: 30px">
					<span class="text-blue2" style="font-size: 19px;">{{previousMonth.name}}</span>
				</div>
				<div class="col mx-2 bg-gris" v-for="(items,index) in [1,2,3,4,5,6]" :key="index" style="border-radius: 30px;">
					<div class="row w-100 m-0 content-user-image text-end">
						<span class="mt-4 fw-bold text-gris2" style="font-size: 21px;">01</span>
					</div>
					<div class="row bg-gris2 d-flex align-items-center justify-content-center content-username">
						<span class="text-white text-center" style="font-size: 11px;">Nombre Apellido</span>
					</div>
				</div>
				<div class="col bg-gris" style="border-radius: 30px;">
					<div class="row w-100 m-0 content-user-image d-flex align-items-center">
						<i class="bi bi-caret-right-fill text-center text-gris2" style="font-size: 3rem;"></i>
					</div>
					<div class="row bg-gris2 d-flex align-items-center justify-content-center content-username">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { computed, onMounted, ref } from 'vue'
	import moment from 'moment';

	const months = ref([
		{ name: 'ENERO', number: '01'},
		{ name: 'FEBRERO', number: '02'},
		{ name: 'MARZO', number: '03'},
		{ name: 'ABRIL', number: '04'},
		{ name: 'MAYO', number: '05'},
		{ name: 'JUNIO', number: '06'},
		{ name: 'JULIO', number: '07'},
		{ name: 'AGOSTO', number: '08'},
		{ name: 'SEPTIEMBRE', number: '09'},
		{ name: 'OCTUBRE', number: '10'},
		{ name: 'NOVIEMBRE', number: '11'},
		{ name: 'DICIEMBRE', number: '12'},
	])
	
	const selectedMonth = ref(months.value[0])
	const currentMonth = moment().format('MM')

	onMounted(() =>{
		selectedMonth.value = months.value.find(month => month.number === currentMonth)
	})

	const previousMonth = computed(() => {
		const index = months.value.indexOf(selectedMonth.value);
		return index != 0 ? months.value[index - 1] : months.value[11]
	})


</script>

<style scoped>
.custom-badgage{
	font-size: 14px;
	border-radius: 30px;
	width: 7vw;
	height: 5vh;
	color: var(--dark-blue);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}
.custom-badgage:hover{
	background-color: var(--dark-blue);
	color: white;
}
.selected{
	background-color: var(--dark-blue);
	color: white;
}
.content-username{
	height: 20%; 
	border-radius: 0 0 20px 20px;
}
.content-user-image{
	height: 80%;
}

</style>