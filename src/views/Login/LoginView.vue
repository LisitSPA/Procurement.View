<template>
	<div class="row bg-login">
		<div class="col-12 circle">
			<div class="row login-section">
				<div class="col-12" style="text-align-last: center;">
					<img src="./../../assets/images/logo-azul.png" alt="Logo Procurement" style="width: 55%">
				</div>
				<div class="col-12 text-center" style="margin-top: 10rem;">
					<p style="font-size: 17px">Para acceder, debes iniciar sesión</p>
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

.bg-login{
	background-image: url('./../../assets/images/bg-login.png');
	height: 100vh;
	background-size: cover;
}
.circle{
	background-color: white;
	clip-path: circle(30% at 50% 50%);
}
.login-section{
	height: 86vh;
    display: flex;
    margin: 7vh 44vh 7vh 44vh;
    justify-content: center;
    align-content: center;
}

</style>