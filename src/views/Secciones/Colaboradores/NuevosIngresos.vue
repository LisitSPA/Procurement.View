<template>
	<div class="row h-100">
		<div class="col-1 d-flex align-self-center justify-content-center">
			<p class="m-0 text"><b>NUEVOS INGRESOS</b> MES DE {{selectedMonth.name}}</p>
		</div>
		<div class="col-10">
			<div class="row h-100">
				<div class="col-2 mx-auto" style="display: flow-root; text-align: -webkit-center;"
					 v-for="(person, index) in peopleCurrentMonth" 
					 :key="index">
					<div class="row bg-gris d-flex align-items-center justify-content-center" style="height: 40%; clip-path: circle(40% at 50% 50%);">
						<img v-if="person.urlImagen != '-'" :src="person.urlImagen" alt="user-image" class="user-image">
						<img v-else src="./../../../assets/images/default-user.png" alt="user-image" class="user-image">
					</div>
					<div class="row bg-gris " style="height: 55%;">
						<div class="col-12 d-flex justify-content-center align-items-end">
							<b>{{ person.names }}</b>
						</div>
						<div class="col-12" style="color: var(--light-blue)">
							<b>{{ person.cargo }}</b>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-1">
			<div class="row h-100">
				<div class="col-12 my-2 bg-gris d-flex align-items-center justify-content-center cursor-pointer month"
					:class="{'selected': selectedMonth.name === month.name}"
					v-for="(month, index) in months" 
					:key="index"
					@click="selectedMonth = month">
					<span>{{ month.name }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import moment from 'moment'
	import { computed, onMounted, ref } from 'vue'
	import userServices from '../../../services/Users';

	onMounted(() =>{
		getUsers()
		selectedMonth.value = months.value.find(month => month.number === currentMonth)
	})

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
	const people = ref([])
	const peoplePage = ref(5)
	const currentPage = ref(1)
	const totalPage = people.value.length / peoplePage.value

	const peopleCurrentMonth = computed(() => {
		const startIndex = (currentPage.value - 1) * peoplePage.value;
		const endIndex = startIndex + peoplePage.value;
		const newPeople = people.value.filter(person => {
			const fechaCreacion = person.fechaCreacion
			const rol = person.role
			const mesCumpleanos = fechaCreacion.split("-")[1]
			return mesCumpleanos === selectedMonth.value.number && (rol == 'Usuario')
		});
		return newPeople.slice(startIndex, endIndex);
	})

	const getUsers = async() => {
		try{
			const res = await userServices.getUsers()
			people.value = res.data
			console.log(res.data)
		}catch(error){
			console.log(error)
		}
	}

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
.user-image{
	height: 5rem;
	width: 7rem;
}

</style>