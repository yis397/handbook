

<template>
    <div>
    <h2 v-if="loading">hola</h2>

    <div v-if="!loading" class="body w-full flex flex-col h-full scr">



       <div class=" w-80 md:w-full grid grid-cols-5 md:place-content-stretch gap-3 md:pl-7 md:pr-7 pl-1 mt-4 ">
       
         <div class="col-span-3 md:col-span-2 flex flex-col h-96 w-80 md:w-full">
           <div class="w-full p-2 bg-gray-800 rounded-md h-4/5 flex justify-around flex-col">
             <p class="text-gray-200 text-xl font-semibold">Detalles</p>
             <p class="text-gray-200 text-sm font-semibold rounded-md h-8 p-1 bg-gray-700 text-center">Agregar presentacion</p>
             <span class="flex flex-row w-2/4 justify-around">
               <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
            <p class="text-gray-400 text-sm">Vive en tehuacan</p>
             </span>

             <span class="flex flex-row w-2/4 justify-around">
               <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-400 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
            <p class="text-gray-400 text-sm">Vive en tehuacan</p>
             </span>
             <p class="text-gray-200 text-sm font-semibold rounded-md h-8 p-1 bg-gray-700 text-center">Agregar presentacion</p>
             <p class="text-gray-200 text-sm font-semibold rounded-md h-8 p-1 bg-gray-700 text-center">Agregar presentacion</p>
             <p class="text-gray-200 text-sm font-semibold rounded-md h-8 p-1 bg-gray-700 text-center">Agregar presentacion</p>
           </div>
         </div>

         <div  class="col-span-3 md:w-full w-96 ">
       <!-- agregar publicacion -->
       <div v-if="store.state.authModule.user.username===usuario.username" class="bg-gray-800 rounded-md w-80 md:w-full p-2">
         <div class="w-full flex flex-row">
          <div class="fot flex items-center justify-center col-span-1 mr-2">
       <div class="w-10 h-10 bg-gray-500 rounded-full overflow-hidden flex justify-center items-center">
        <img class="w-15 h-15 " :src="store.state.authModule.user.avatar?store.state.authModule.user.avatar.file:'/src/assets/nar.png'" alt="">
       </div>
    </div>
    
        <label  for="my-modal" class="btn bg-slate-700 w-5/6">
        Agrege un Post
        </label>
</div>


<div class="flex flex-row w-full justify-around mt-2">
<button class="flex flex-row w-1/3 p-2 justify-around hover:bg-slate-600 rounded-md"> 
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg>
      <p class="text-sm text-slate-400">Agrege una foto</p>
       </button>


       <button class="flex flex-row w-1/3 p-2 justify-around hover:bg-slate-600 rounded-md"> 
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
      <p class="text-sm text-slate-400">Foto/video</p>
       </button>
</div>
       </div>

       <!-- publicaciones -->
             
       <div  v-for="(item, index) in publicaciones" :key="index" class="w-80 md:w-full flex items-center justify-center  mt-3 mb-3">
       <CardPostVue :item="item"/>
       </div>
       <div class="h-16">
       </div>
         </div>
       </div>
       
     <!-- alert image -->
     <ModalPutVue label="my-modal" tipo="publicacion"/>
       
       <!-- alert image end -->
      
      <!-- alert post --> 
      <!-- alert post end-->
      <!-- alert image -->

      <!-- alert image end-->

    </div>
    </div>
    
</template>
<script setup lang="ts">
import { useQuery,useSubscription  } from '@vue/apollo-composable';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ModalPutVue from '../components/ModalPut.vue';
import CardPostVue from '../components/CardPost.vue'
import { QGETPUBLICSCION } from '../../../graphql/querys';
import { IPublicacion,IUser, Ttipo } from '../../../interface/models';

 const router = useRoute ()
const {result,loading}=useQuery(QGETPUBLICSCION,{
  "username": router.params.id
})
 const store=useStore()
const usuario=ref()
const publicaciones=ref<IPublicacion[]>([])
watchEffect( () => {
      if (!loading.value) {
        publicaciones.value=result.value.getPerfil.publicaciones
        usuario.value=result.value.getPerfil.usuario
      }
    });


</script>
<style>
    .body{

       overflow-y: scroll;
    }
    
    
</style>