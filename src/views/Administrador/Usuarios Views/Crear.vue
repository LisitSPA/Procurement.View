<template>
	<div class="modal-header">
		<h5 class="modal-title" id="myModalLabel">Añadir Usuario</h5>
		<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-6">
				<label for="">Nombre</label>
				<input type="text" class="form-control">
			</div>
			<div class="col-6">
				<label for="">Apellido</label>
				<input type="text" class="form-control">
			</div>
			<div class="col-6">
				<label for="">Correo</label>
				<input type="text" class="form-control">
			</div>
			<div class="col-6">
				<label for="">Cargo</label>
				<input type="text" class="form-control">
			</div>
			<div class="col-6">
				<label for="">Rol</label>
				<input type="text" class="form-control">
			</div>
		</div>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal">Cerrar</button>
		<button type="button" class="btn btn-primary btn-radius">Guardar</button>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>