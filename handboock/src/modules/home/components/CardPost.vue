<template>
    <div class=" bg-gray-800 w-full h-4/5 md:w-full rounded-2xl grid md:grid-rows-8  p-2 mb-2">
    <div class=" row-span-1 flex w-full h-full justify-between pr-2 ">
        <div class="flex flex-row w-3/4 float-left">
         
          <div class="fot flex items-center justify-center col-span-1 ">
        <router-link :to="'/perfil/'+prop.item.idUser.username+'/home'">
        
       <div  class="w-10 h-10 bg-slate-700 rounded-full overflow-hidden flex justify-center items-center">

        <img class="w-15 h-15 " :src="prop.item.idUser!.avatar?prop.item.idUser!.avatar.file:'/src/assets/nar.png'" alt="">
       
       </div>
        </router-link>

       </div>
        <div class="flex flex-col ml-2">
        <p class="text-sm text-slate-300">{{nombre}}</p>
        <p class="text-sm text-slate-400">14:14</p>
        </div>
        
        </div>
       <button class=" text-slate-400 float-right">...</button>
    </div>


    <div class=" row-span-6 overflow-hidden ">
    <label @click="showMessage" :for="prop.item.id" class="cursor-pointer">
    <img class="object-scale-down h-96 w-full" :src="prop.item.file" alt="">
    </label>
    <div>
    <div class="pl-5">

    <p class="text-slate-500 font-semibold text-xs">{{new Date(date).toDateString()}}</p>
    <p class="text-slate-300 font-semibold text-sm">{{prop.item.descripcion}}</p>
    </div>
    </div>
    </div>
    <div class=" row-span-1 h-full flex flex-col">
      <div class="w-full flex flex-row">
        <div><p class="text-xs text-slate-400">{{isLike.number}} likes</p></div>

      </div>

       <div class="w-full flex flex-row justify-between">

       <button @click="pushLike" :class="isLike.isLike?' btn btn-info flex flex-row w-1/3 p-2 justify-around hover:bg-slate-600 rounded-md':' btn btn-outline flex flex-row w-1/3 p-2 justify-around hover:bg-slate-600 rounded-md'"> 
       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
</svg>
      <p class=" text-sm text-slate-400">Like</p>
       </button>

       <button class="flex flex-row w-1/3 p-2 justify-around hover:bg-slate-600 rounded-md"> 
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
</svg>
      <p class="text-sm text-slate-400">Comentar</p>
       </button>


      <button class="flex flex-row w-1/3 p-2 justify-around hover:bg-slate-600 rounded-md"> 
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
</svg>
      <p class="text-sm text-slate-400">Compartir</p>
       </button>
      </div>
    
    </div>

    <!-- modal -->
    <input type="checkbox" :id="prop.item.id" class="modal-toggle"/>
    
<div class="modal">
  <div class="modal-box grid md:grid-cols-3 grid-row-2 w-11/12 max-w-5xl h-5/6 max-h-5xl">
    <div class="h-full w-full bg-gray-900 md:col-span-2 row-span-1 flex justify-center items-center overflow-hidden">
    <img class="object-fillr w-full " :src="prop.item.file" alt="">
    </div>

        <div class="md:col-span-1 row-span-1 flex flex-col p-1">
     
     <div class="flex flex-row w-full float-left ">   
          <div class="fot flex items-center justify-between">
       <div @click="navegar" class="w-10 h-10 bg-slate-700 rounded-full overflow-hidden flex justify-center items-center">

        <img class="w-15 h-15 " :src="prop.item.idUser!.avatar?prop.item.idUser!.avatar.file:'/src/assets/nar.png'" alt="">
  
       </div>
       </div>
        <div class="flex flex-col">
        <p class="text-sm text-slate-300">{{nombre}}</p>
        <p class="text-sm text-slate-400">14:14</p>
        </div>
        <label :for="prop.item.id" class="text-lg ml-auto cursor-pointer">X</label>
        </div>
        <!-- comentarios -->
        <div class="list md:h-3/4 h-1/7 w-full p-2 mt-2 ">
         

         <p v-if="comentarios.loading">Sin Comentario</p>

          <div v-if="!comentarios.loading">
                   <div  class="flex flex-row w-full float-left bg-gray-700 rounded-xl mb-3" v-for="(item, index) in comentarios.comentarios" :key="index">
         
          <div class="fot flex items-center justify-center col-span-1 ">
       <div @click="navegar" class="w-10 h-10 bg-slate-700 rounded-full overflow-hidden flex justify-center items-center">
  
        <img class="w-15 h-15 " :src="item.idUser.avatar?item.idUser.avatar.file:'/src/assets/nar.png'" alt="">
       
       </div>
       </div>
        <div class="flex flex-col ml-2">
        <p class="text-sm text-slate-300">{{item.idUser.nombre}}</p>
        <p class="text-sm font-light text-slate-400">{{item.comentario}}</p>
        </div>
          </div>
        
        
       
       </div>
        </div>
    <div class="h-1/6 w-full flex flex-row ">
   
   <div class="w-full flex items-end flex-row justify-between ">

   <button class="flex flex-row  p-2 justify-around hover:bg-slate-600 rounded-md"> 
       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
</svg>
      <p class="text-xs text-slate-400">Like: {{prop.item.likes}}</p>
       </button>

       <button class="flex flex-row  p-2 justify-around hover:bg-slate-600 rounded-md"> 

      <p class="text-xs text-slate-400">Comentarios: {{prop.item.comentarios}}</p>
       </button>
  <button class="flex flex-row  p-2 justify-around hover:bg-slate-600 rounded-md"> 
       
      <p class="text-xs text-slate-400">Compartir</p>
       </button>

   </div>
   </div>

    <form @submit.prevent="addComentario" class=" w-full flex justify-center flex-row items-center h-1/4">
    <input type="text" v-model="valueCometario.comenT" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs" />
    <button type="submit" class="btn text-xs">Comentar</button>
    

    </form>
    </div>


    </div>
    



  </div>

</div>
    

</template>
<script setup lang="ts">
import { useMutation, useQuery } from "@vue/apollo-composable";
import { useRouter } from "vue-router";
import { useSubscription } from "@vue/apollo-composable"
import { ref, watch } from "vue";
import { GMuta } from "../../../graphql";
import { QGETCOMENTARIO } from "../../../graphql/querys";
import { IPublicacion,IComentario } from "../../../interface/models";
import { gql } from "graphql-tag";
import { watchEffect } from "vue";
const ruta=useRouter()
const {mutate:misLike}=useMutation(GMuta.MisLike)
const {mutate:addComenta}=useMutation(GMuta.addcomentario)

const { result } = useSubscription(gql`
subscription Subscription {
  subComentarios {
    comentario
    idUser {
      username
      nombre
      avatar {
        file
      }
    }
  }
}
    `)

const prop=defineProps<{
  item:IPublicacion
}>()


const comentarios=ref({loading:true,comentarios:[]})
const nombre=prop.item.idUser!.nombre+" "+prop.item.idUser!.apellidos
const isLike=ref({isLike:prop.item.likes===0?false:prop.item.isLike,number:prop.item.likes})
const valueCometario=ref({comenT:""})
const date= Date(prop.item.createdAt)
watch(result,(data)=> {
  
  const newCom={idUser:data.subComentarios.idUser,comentario:data.subComentarios.comentario }
  comentarios.value.comentarios.push(newCom)
})
  


const pushLike=async()=>{
 isLike.value={
  isLike:!isLike.value.isLike,number:isLike.value.isLike?isLike.value.number-1:isLike.value.number+1}
 await misLike({
  "idP": prop.item.id
})
}
const addComentario=async()=>{
  
  if(valueCometario.value.comenT==="")return
 const resp= await addComenta({
   "idP": prop.item.id,
  "comentario": valueCometario.value.comenT
  })
}
const showMessage=async()=>{
  if(comentarios.value.comentarios.length!==0)return

   const {result,loading}= useQuery(QGETCOMENTARIO,{
  "idP": prop.item.id
})
  setTimeout(() => {
    comentarios.value= {loading:loading.value,comentarios: result.value.getComentarios}
    
  }, 1000);
}
const navegar=()=>{
  ruta.push('perfil/'+prop.item.idUser!.username)
  location.reload()
}
</script>

<style >

.list{


    overflow-y:auto;

  }
    
</style>