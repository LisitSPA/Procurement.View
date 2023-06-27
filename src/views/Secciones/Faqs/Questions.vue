<template>
	<div class="col-8 mx-auto">
		<div class="accordion accordion-flush" id="accordionFlushExample">
			<div class="accordion-item item my-2" v-for="(item, index) in 5" :key="index">
				<h2 class="accordion-header" id="flush-headingOne">
					<button class="accordion-button collapsed header" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne' + index" aria-expanded="false" aria-controls="flush-collapseOne">
						Pregunta #{{ index+1 }}
					</button>
				</h2>
				<div :id="'flush-collapseOne' + index" class="accordion-collapse collapse" :class="{'show': index === 0}" :aria-labelledby="'flush-headingOne' + index" data-bs-parent="#accordionFlushExample">
					<div class="accordion-body body-content">
						<span>
							Lorem ipsum dolor sit amet consectetur adipiscing elit gravida suscipit pulvinar, facilisi platea parturient pretium sapien inceptos montes orci phasellus. Torquent class gravida sem conubia ridiculus congue morbi dui cras lacus molestie parturient, tempus suscipit ante sapien eget dignissim quam viverra pretium tristique. Lacinia porttitor hendrerit ad mus vehicula aliquet pellentesque per leo tristique diam molestie, sagittis etiam potenti rutrum tellus posuere malesuada metus tortor velit. Nullam cursus tempus sapien nostra mi, bibendum torquent hendrerit duis donec velit, molestie semper nam dictumst. Aenean primis suspendisse mi ultricies blandit nec fermentum, sodales porta proin condimentum dignissim ridiculus, mollis posuere eleifend convallis ligula etiam. Sodales commodo auctor consequat condimentum rutrum nunc, nostra volutpat cum eleifend fusce euismod vitae, lacus arcu ligula vestibulum pellentesque.
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>
.item{
	border: none;
}
.header{
	background-color: var(--light-blue) !important;
	color: white;
	font-weight: bold;
	border-radius: 50px !important;
	display: inline-block;
	text-align: center;
	font-size: 24px;
}
.body-content{
	background-color: var(--light-gris);
	border-radius: 30px;
	color: var(--blue);
	font-size: 18px;
	text-align: center;
	padding: 2rem 10rem 2rem 10rem;
}
</style>