<template>
	<div class="row bg-login">
		<div class="col-12 circle">
			<div class="row login-section">
				<div class="col-12" style="text-align-last: center;">
					<img src="./../../assets/images/logo-azul.png" alt="Logo Procurement" style="width: 55%">
				</div>
				<div class="col-12 text-center" style="margin-top: 10rem;">
					<p style="font-size: 17px">Para acceder, debes iniciar sesión</p>
					<button class="btn btn-google" @click="login">
						<i class="bi bi-google"></i> Iniciar sesión con Google</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { googleTokenLogin } from "vue3-google-login"
import { useRouter } from 'vue-router'
import UserServices from './../../services/Users'

const login = () => {
  googleTokenLogin().then((response) => {
    console.log(response)
		googleVerify(response)
  })
}

const router = useRouter()

const googleVerify = async(response) => {
	try{
		let data = new FormData()
		data.append('data', response.access_token)
		const res = await UserServices.login(data)
		localStorage.setItem('usuario', JSON.stringify(res.data))
		router.push('/Home')
	}catch(error){
		console.log(error)
	}
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
.btn-google{
	border: 2px solid gray;
}

</style>