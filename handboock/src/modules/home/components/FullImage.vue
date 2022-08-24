<template>
    <!-- modal -->
    <div>
    
    <input type="checkbox" :id="label" class="modal-toggle"/>
<div class="modal">

  <div v-if="!prop.publicacion">
  <label :for="prop.label" class="btn btn-circle"> salir</label></div>

  <div v-if="prop.publicacion" class="modal-box grid grid-cols-3 w-11/12 max-w-5xl h-5/6 max-h-5xl">
    <div class="h-full w-full bg-gray-900 col-span-2">
     <img class="object-cover h-96 w-full " :src="prop.publicacion.file" alt="">
    </div>

    <div class="col-span-1 flex flex-col p-1">
     
     <div class="flex flex-row w-full float-left ">   
          <div class="fot flex items-center justify-between">
       <div class="w-10 h-10 bg-slate-700 rounded-full overflow-hidden flex justify-center items-center">
        <img class="w-15 h-15 " src="/src/assets/nar.png" alt="">
       </div>
       </div>
        <div class="flex flex-col">
        <p class="text-sm text-slate-300">Jesus antonio hernandez</p>
        <p class="text-sm text-slate-400">14:14</p>
        </div>
        <label :for="prop.label" class="text-lg ml-auto cursor-pointer">X</label>
        </div>

        <div class="list h-3/4  w-full p-2">
        {{prop.publicacion.descripcion}}
        </div>
   
   <div class="h-1/6 w-full flex flex-row ">
   
   <div class="w-full flex items-end flex-row justify-between ">

   <button class="flex flex-row  p-2 justify-around hover:bg-slate-600 rounded-md"> 
       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
</svg>
      <p class="text-xs text-slate-400">Like: {{prop.publicacion.likes}}</p>
       </button>

       <button class="flex flex-row  p-2 justify-around hover:bg-slate-600 rounded-md"> 

      <p class="text-xs text-slate-400">Comentarios: {{prop.publicacion.comentarios}}</p>
       </button>
  <button class="flex flex-row  p-2 justify-around hover:bg-slate-600 rounded-md"> 
       
      <p class="text-xs text-slate-400">Compartir</p>
       </button>

   </div>
   </div>
    <form action="" class=" flex justify-center flex-row items-center ">
    <input type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs" />
     <label :for="prop.label" class="btn">Publicar</label>
    </form>


    </div>
  </div>
  </div>
    </div>
</template>
<script setup lang="ts">
import { IPublicacion } from "../../../interface/models";


const prop=defineProps<{
    label:string,
    publicacion:IPublicacion,
    }>()

</script>
<style>
.list{


    overflow-y:auto;

  } 
    
</style>