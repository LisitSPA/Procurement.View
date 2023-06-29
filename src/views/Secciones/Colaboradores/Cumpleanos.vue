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
				<div class="col-2 mx-2 bg-gris" v-for="(person,index) in peopleCurrentMonth" :key="index" style="border-radius: 30px;">
					<div class="row w-100 m-0 content-user-image text-end">
						<span class="mt-4 fw-bold text-blue2" style="font-size: 21px;">{{ dateFormat(person.fechaCumpleanos) }}</span>
						<img v-if="person.urlImagen != '-'" :src="person.urlImagen" alt="user-image" class="user-image">
						<img v-else src="./../../../assets/images/default-user.png" alt="user-image" class="user-image">
					</div>
					<div class="row bg-dark-blue d-flex align-items-center justify-content-center content-username">
						<span class="text-white text-center" style="font-size: 11px;">{{person.names}}</span>
					</div>
				</div>
				<div class="col-2 bg-gris" style="border-radius: 30px;"
					v-if="currentPage < totalPage"
					@click="currentPage++">
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
				<div class="col-2 mx-2 bg-gris" v-for="(person,index) in peopleLastMonth" :key="index" style="border-radius: 30px;">
					<div class="row w-100 m-0 content-user-image text-end">
						<span class="mt-4 fw-bold text-gris2" style="font-size: 21px;">{{ dateFormat(person.fechaCumpleanos)}}</span>
						<img v-if="person.urlImagen != '-'" :src="person.urlImagen" alt="user-image" class="user-image">
						<img v-else src="./../../../assets/images/default-user.png" alt="user-image" class="user-image">
					</div>
					<div class="row bg-gris2 d-flex align-items-center justify-content-center content-username">
						<span class="text-white text-center" style="font-size: 11px;">{{ person.names }}</span>
					</div>
				</div>
				<div class="col-2 bg-gris" style="border-radius: 30px;"
						v-if="currentPage < totalPage"
						@click="currentPage++">
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
	import userServices from './../../../services/Users'

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

	const peoplePage = ref(6)
	const currentPage = ref(1)
	const totalPage = people.value.length / peoplePage.value

	const peopleCurrentMonth = computed(() => {
		const startIndex = (currentPage.value - 1) * peoplePage.value;
		const endIndex = startIndex + peoplePage.value;
		const newPeople = people.value.filter(person => {
			const fechaCumpleanos = person.fechaCumpleanos
			const mesCumpleanos = fechaCumpleanos.split("-")[1]
			return mesCumpleanos === selectedMonth.value.number
		});
		return newPeople.slice(startIndex, endIndex);
	})

	const previousMonth = computed(() => {
		const index = months.value.indexOf(selectedMonth.value);
		return index != 0 ? months.value[index - 1] : months.value[11]
	})

	const peopleLastMonth = computed(() => {
		const startIndex = (currentPage.value - 1) * peoplePage.value;
		const endIndex = startIndex + peoplePage.value;
		const newPeople = people.value.filter(person => {
			const fechaCumpleanos = person.fechaCumpleanos
			const mesCumpleanos = fechaCumpleanos.split("-")[1]
			return mesCumpleanos === previousMonth.value.number
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

	const dateFormat = (date) => {
		return date.split("-")[0]
	}

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
	display: flex;
	justify-content: center;
}
.user-image{
	height: 5rem;
	width: 7rem;
}

</style>