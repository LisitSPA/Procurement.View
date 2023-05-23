<template>
	<form @submit.prevent="storeNewsletter">
		<div class="modal-header">
			<h5 class="modal-title" id="myModalLabel">Añadir Newsletter</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-12">
					<label for="">Título</label>
					<input type="text" class="form-control" v-model="title">
				</div>
				<div class="col-12">
					<label for="">Descripción</label>
					<textarea class="form-control" cols="30" rows="5" v-model="description"></textarea>
				</div>
				<div class="col-12">
					<label for="">Imagen</label>
					<input type="file" class="form-control" accept="image/png, image/jpeg, image/jpg">
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal">Cerrar</button>
			<button type="submit" class="btn btn-primary btn-radius" :disabled="btnSend">
			 Guardar
			 <div v-if="btnSend" class="text-info spinner-border spinner-border-sm" role="status">
			 </div>
			</button>
		</div>
	</form>
</template>

<script setup>
	import { ref } from 'vue'
	import { toast } from 'vue3-toastify';

	const title = ref('')
	const description = ref('')
	const image = ref('')
	const btnSend = ref(false)

</script>

<style scoped>

</style>