<template>
	<form @submit.prevent="updateAwards">
		<div class="modal-header">
			<h5 class="modal-title" id="myModalLabel">Editar Procurement Awards</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-12">
					<label for="">Categoria</label>
					<select class="form-control" v-model="category" required>
						<option value="" selected disabled>Seleccione una opción...</option>
						<option v-for="(category, index) in categories" :key="index" :value="category">{{ category.nombreAward }}</option>
					</select>
				</div>
				<div class="col-12">
					<label for="">Usuario</label>
					<input type="text" class="form-control" :value="selectedAward.usuario" disabled>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-secondary btn-radius" data-bs-dismiss="modal" id="btnCerrar">Cerrar</button>
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

	const props = defineProps({
		categories: {
			required: true
		},
		selectedAward: {
			required: true
		}
	})

	const emit = defineEmits(['updateNewsletterList'])
	const category = ref('')
	const user = ref('')
	const btnSend = ref(false)

</script>

<style scoped>

</style>