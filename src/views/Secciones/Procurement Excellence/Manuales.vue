<template>
	<div class="row h-100">
		<div class="col bg-gris">
			
		</div>
		
		<div class="col-9">
			<div class="row px-3" style="height: 10%;">
				<div class="col bg-gris">
				</div>
			</div>
			<div class="row p-3" style="height: 80%;">
				<div class="col">
					<div class="row h-50">
						<div class="col-12" style="overflow-x: scroll;">
							<nav class="navbar navbar-expand-lg flex-row h-100">
								<ul class="navbar-nav mr-auto flex-nowrap h-100">
									<li class="d-flex align-items-center justify-content-center bg-light-blue mx-2 text-white cursor-pointer" style="width: 10vw;"
										v-for="(item, index) in arrayAbecedario" 
										:key="index">
										<span class="fw-bold" style="font-size: 10vh;">{{ item }}</span>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="row h-50">
						<div class="col-12" style="overflow-x: scroll;">
							<nav class="navbar navbar-expand-lg flex-row h-100">
								<ul class="navbar-nav mr-auto flex-nowrap h-100">
									<li class="d-flex align-items-center justify-content-center bg-light-blue mx-2 text-white cursor-pointer" style="width: 10vw;"
										v-for="(item, index) in arrayAbecedario" 
										:key="index">
										<span class="fw-bold" style="font-size: 10vh;">{{ item }}</span>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<div class="row px-3" style="height: 10%;">
				<div class="col bg-gris">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const abecedario = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
	const arrayAbecedario = abecedario.toUpperCase().split(',');
</script>

<style>


</style>