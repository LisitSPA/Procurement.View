<template>
	<div class="modal-header">
		<h5 class="modal-title" id="myModalLabel">Eliminar Organigrama</h5>
		<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
	</div>
	<div class="modal-body text-center">
		<h5>¿Estás seguro que quieres eliminar el organigrama actual?</h5>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal">Cerrar</button>
		<button type="button" class="btn btn-danger btn-radius">Eliminar</button>
	</div>
</template>

<script setup>
	import { toast } from 'vue3-toastify'

</script>

<style scoped>

</style>