<template>
	<div class="row row-menu">
		<div class="col-6 menu cursor-pointer">
			<span class="title-section" @click="back">{{ sectionTitle }}</span>
			<input type="search" class="form-control" placeholder="Aquí puedes buscar..." style="width: 10vw; height: 4vh;">
		</div>
		<div class="col-6 logo cursor-pointer" @click="this.$router.push('/Home')" >
			<img src="./../../assets/images/logo-azul.png" alt="Logo procurement" style="width: 21%;">
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import { useRouter } from 'vue-router'
	const router = useRouter()

	const sectionTitle = computed(() => {
		const currentPath = router.currentRoute.value.path
		const replace = currentPath.replace('/', '');
		const replace2 = replace.replace(/-/g, ' ');
		const spaces = replace2.split("/");
		return spaces.map(space => ` ${space.trim()} `).join("/");
	})
	
	const back = () => {
		history.back()
	}
</script>

<style scoped>
.menu{
	background-color: #ECEDF1;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.row-menu{
	margin-top: 10vh;
	height: 5vh;
}

.title-section{
	font-size: 25px;
	font-weight: bold;
	color: var(--blue-text);
}
.logo{
	display: flex;
	justify-content: flex-end;
	padding-right: 5vw;
}
/* .input-search{
		width: 15vw;
    border-radius: 30px;
    padding: 10px;
		height: 5vh;
	} */

</style>