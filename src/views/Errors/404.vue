<template>
	<div class="row">
		<div class="col-12">
			<div class="row section">
				<div class="col-12" style="text-align-last: center;">
					<img src="./../../assets/images/logo-azul.png" alt="Logo Procurement" style="width: 55%">
				</div>
				<div class="col-12 text-center" style="margin-top: 5rem;">
					<p style="font-size: 30px">Sitio en construcción, proximamente estará habilitado.</p>
					<button class="btn btn-border-lighblue" @click="this.$router.push('/Home')">Volver al Home</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>
.section{
	height: 86vh;
	display: flex;
	margin: 7vh 44vh 7vh 44vh;
	justify-content: center;
	align-content: center;
}
.btn-border-lighblue{
	height: 4vh;
	color: var(--light-blue);
	border: 2px solid var(--light-blue);
	width: 10vw;
	border-radius: 30px;
	font-weight: bold;
}
.btn-border-lighblue:hover{
	color: white;
	background-color: var(--light-blue);
}
</style>