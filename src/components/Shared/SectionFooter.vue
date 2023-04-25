<template>
	<div class="col-10 d-flex align-items-center" style="padding-left: 5vw;">
		<span>Todo el contenido de este sitio, son informaciones internas del área de Procurement SOFTYS y de carácter confidencial.</span>
	</div>
	<div class="col-2 back-home d-flex align-items-center cursor-pointer" @click="this.$router.push('/Home')">
		<span>Volver a Home</span>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.back-home{
	height: 4vh;
	background-color: var(--dark-blue);
	color: white;
	font-size: 21px;
	border-radius: 20px 0 0 20px;
	padding-left: 3vw;
}
</style>