<template>
	<div class="row" style="height: 60%;">
		<div class="col-6 bg-gris cursor-pointer" style="border-radius: 30px; padding: 2rem 2rem 0 2rem;"  @click="$emit('updateContent', 'organigrama')">
			<div class="row">
				<div class="col-12">
					<span>Organigrama</span>
				</div>
				<div class="col-12" style="height: 25vh;">
						<!-- imagen organigrama	-->
				</div>
				<div class="col-12 text-center">
					<p style="color: #CCCCCC; font-size: 21px;"><i class="bi bi-caret-down-fill"></i>Ver más</p>
				</div>
			</div>
		</div>
		<div class="col-6" style="padding: 0 20px 0 20px;">
			<div class="row h-100">
				<div class="col-12 cursor-pointer" @click="$emit('updateContent', 'cumpleaños')">
					<p class="light-blue-text fw-bold" style="font-size: 22px;">Cumpleaños</p>
					<p class="text-blue2" style="font-size: 14px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at ducimus veniam doloremque omnis recusandae eos? Doloribus, ad porro! Tempore dicta minima architecto a consequuntur maiores vero quod totam odio!</p>
				</div>
				<div class="col-12" style="padding: 0 10px 0 20px; height: 20vh;">
					<div class="row h-100">
						<div class="col user-bday bg-gris" v-for="(items,index) in 4" :key="index" >
						</div>
						<div class="col-1 d-flex align-items-center justify-content-center">
							<i class="bi bi-caret-right-fill text-blue2" style="font-size: 22px;"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row mt-2" style="height: 40%;">
		<div class="col-6 bg-blue1 cursor-pointer d-flex align-items-end" style="border-radius: 30px; padding: 2rem 2rem 2rem 2rem;" @click="$emit('updateContent', 'procurement')">
			<span class="text-white" style="font-size: 22px;">Procurement awards</span>
		</div>
		<div class="col-6" style="padding: 0 20px 0 20px;">
			<div class="row h-100">
				<div class="col-12 cursor-pointer" @click="$emit('updateContent', 'ingresos')">
					<p class="dark-blue-text fw-bold m-0" style="font-size: 22px;">Nuevos ingresos</p>
					<p class="text-blue2 m-0" style="font-size: 14px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at ducimus veniam doloremque omnis recusandae eos? Doloribus, ad porro! Tempore dicta minima architecto a consequuntur maiores vero quod totam odio!</p>
				</div>
				<div class="col-12" style="padding: 0 10px 0 20px; height: 12vh;;">
					<div class="row h-100">
						<div class="col">
							<div class="row h-100">
								<div class="col new-user bg-gris" v-for="(items,index) in 5" :key="index">
								</div>
							</div>
							<div class="row">
								<div class="col text-blue2 text-center bg-gris" v-for="(items,index) in 5" :key="index" style="margin-right: 10px; height: 1.5rem;">
									<span class="fw-bold">12 abril 23</span>
								</div>
							</div>
						</div>
						<div class="col-1 d-flex align-items-center justify-content-center">
							<i class="bi bi-caret-right-fill text-blue2" style="font-size: 22px;"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style>
.organigrama-title{
	font-size: 22px;
}
.user-bday{
	border-radius: 20px;
	margin-right: 5px;
}
.new-user{
	clip-path: circle(40% at 50% 50%);
	margin-right: 5px;
}

</style>