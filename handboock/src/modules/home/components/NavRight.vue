<template >
    <div class="body w-full p-3 float-right">
        <div class=" w-full h-1/2 flex flex-col">
        <p class="text-slate-50">Publicidad</p>

             <div class="grid grid-cols-2 w-full h-1/3">
               <div class="col-span-1 p-2">
               <div class=" rounded-lg w-full h-full bg-gray-300">
               </div>
               </div>
               <div class="col-span-1 p-1 overflow-hidden">
               <p class="text-sm text-slate-50">Lorem ipsum dolor sit amet, consectetur !</p>
               <p class="text-xs text-slate-300">Lorem ipsum dolor sit amet, consectetur !</p>
               </div>
             </div>

             <div class="grid grid-cols-2 w-full h-1/3">
               <div class="col-span-1 p-2">
               <div class=" rounded-lg w-full h-full bg-gray-300">
               </div>
               </div>
               <div class="col-span-1 p-1 overflow-hidden">
               <p class="text-sm text-slate-50">Lorem ipsum dolor sit amet, consectetur !</p>
               <p class="text-xs text-slate-300">Lorem ipsum dolor sit amet, consectetur !</p>
               </div>
             </div>
        
          <div>
        <p class="text-slate-50">Cumpleaños</p>
            <div class="flex flex-row justify-around">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-red-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
            </span>
            <div class="flex flex-col ">
            <p class="text-xs text-slate-300">Hoy es el cumpleaños de ...</p>
            <p class="text-xs text-slate-300">Jose</p>
            </div>
            <div>
            </div>
            </div>
          </div>
        </div>


        <div class=" w-full h-1/2 p-2">
        <div class="flex flex-row justify-around">
        <p class="text-sm text-slate-300 font-bold">Contactos</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
<button class="text-sm text-slate-300">...</button>
        </div>
<p v-if="loading">
Sin Amigos
</p>

<div v-if="!loading">
<div  v-for="(item, index) in result.getAmigos" :key="index">

        <div  class="flex flex-row mb-2">
        <div class="fot flex items-center justify-center">
        <router-link :to="'/perfil/'+item.username+'/home'">
        
       <div class="w-8 h-8 bg-slate-900 rounded-full overflow-hidden flex justify-center items-center">
        <img class="w-15 h-15 " :src="item.avatar?item.avatar.file:'/src/assets/nar.png'" alt="">
       </div>
        </router-link>
    </div>
    <div  class="flex items-center justify-center  w-full  overflow-hidden hover:bg-gray-800 rounded-lg" >
    <p class="text-sm text-slate-300">{{item.nombre}} {{item.apellidos}} </p>
    </div>
        </div>
</div>
</div>

        

        
        </div>
    </div>
</template>
<script setup lang="ts">
import { IUser } from "../../../interface/models"
import { useQuery } from '@vue/apollo-composable';
import { useStore } from "vuex";
import { QGETAMIGOS } from "../../../graphql/querys";
        const store=useStore()
 const {loading,result}=useQuery(QGETAMIGOS,{
          "username":store.state.authModule.user.username
        })

 const list=[1,2,2]
</script>
<style >
    .body{
        height: 100vh;
    }
</style>