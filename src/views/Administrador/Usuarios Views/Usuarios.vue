<template>
	<div class="row" style="height: 10%;">
		<div class="col-12 d-flex align-items-center">
			<h1>Usuarios</h1>
			<button class="btn-border-lighblue" data-bs-toggle="modal" data-bs-target="#myModal"
				style="margin-left: 1rem;" @click="$emit('setModalContent', 'create')"><i class="bi bi-plus" style="font-size: 1.2rem;"></i> Añadir Usuario</button>
		</div>
	</div>
	<div class="row" style="height: 85%;">
		<div class="col-12 h-100" style="padding-top: 1rem;">
			<div class="table-responsive h-100">
				<table class="table table-hover ">
					<thead>
						<tr class="bg-blue1 text-white text-center">
							<th scope="col">#</th>
							<th scope="col">Nombre</th>
							<th scope="col">Apellido</th>
							<th scope="col">Correo</th>
							<th scope="col">Cargo</th>
							<th scope="col">Rol</th>
							<th scope="col">Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr class="text-center dark-blue-text" v-for="(item,index) in 10" :key="index">
							<th scope="row">{{ index+1 }}</th>
							<td>Mark</td>
							<td>Marquez</td>
							<td>correo@cmpc.cl</td>
							<td>Cargo prueba</td>
							<td>Admin</td>
							<td>
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"  
									@click="$emit('setModalContent', 'edit')"><i class="bi bi-pencil-square"></i></button>
								<button class="btn-actions" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left: 1rem;"
								@click="$emit('setModalContent', 'deshabilitar')"><i class="bi bi-trash-fill"></i></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div class="row" style="height: 5%;">
		<div class="col-12 d-flex justify-content-center align-items-center">
			<nav aria-label="Page navigation example">
				<ul class="pagination m-0">
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					<li class="page-item"><a class="page-link" href="#">1</a></li>
					<li class="page-item"><a class="page-link" href="#">2</a></li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>
.btn-border-lighblue{
		height: 4vh;
		color: var(--light-blue);
		border: 2px solid var(--light-blue);
		width: 8vw;
		border-radius: 30px;
		font-weight: bold;
	}
.btn-border-lighblue:hover{
	color: white;
	background-color: var(--light-blue);
}

.btn-actions{
	height: 2rem;
	color: var(--light-blue);
	border: 2px solid var(--light-blue);
	width: 4rem;
	border-radius: 30px;
	font-weight: bold;
}
.btn-actions:hover{
	color: white;
	background-color: var(--light-blue);
}
</style>