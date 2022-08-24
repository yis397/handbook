<template >
        <div v-if="!loading" class="body w-full flex flex-col h-full scr">
       <div class="w-full h-5/6 grid grid-rows-7 gap-2 bg-gray-800 relative">
       <label for="imagen" class="cursor-pointer  row-span-4 overflow-hidden bg-white ">
     <img class="object-cover h-96 w-full " :src="usuario.headImg?usuario.headImg.file:'/src/assets/nar.png'" alt="">


       </label>
        <div class="absolute bg-slate-800 mt-56 ">
                 <label  @click="selectPost('head')" for="my-modal"  class="absolute bottom-1  h-12 w-12 rounded-full flex justify-center items-center text-slate-400 hover:bg-gray-500 hover:text-slate-700">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
         </label>
        </div>
       <div class="row-span-2 flex flex-row">

        <div class=" flex items-center justify-center  h-full md:w-1/3 w-2/3 relative">
       <label for="imagen" class="btn w-48 h-48 bg-gray-700 rounded-full overflow-hidden flex justify-center items-center">
        <img class="w-15 h-15 " :src="usuario.avatar?usuario.avatar.file:'/src/assets/nar.png'" alt="">
        
         <label v-if="store.state.authModule.user.username===usuario.username" for="my-modal" @click="selectPost('perfil')"  class="absolute bottom-1 bg-gray-600 h-12 w-12 rounded-full flex justify-center items-center text-slate-400 hover:bg-gray-500 hover:text-slate-700">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
         </label>
         
        </label>
        </div>
        <div class="flex flex-col w-2/3 h-full justify-center ">
        <p class="text-slate-100 text-xl md;text-4xl font-semibold mb-1">{{usuario.nombre}} {{usuario.apellidos}}</p>
        <p class="text-slate-100 text-xl mb-1">{{usuario.username}}</p>
        <p class="text-slate-100 text-sm mb-2">{{usuario.amigos}} amigo</p>
        <div class="flex flex-row mb-1">
          <div class="fot flex items-center justify-center col-span-1 ">
       <div v-for="(amigo, index) in amigos" :key="index" class="w-10 h-10 bg-slate-700 rounded-full overflow-hidden flex justify-center items-center">
        <img class="w-15 h-15 " :src="amigo.avatar?amigo.avatar.file:'/src/assets/nar.png'" alt="">
       </div>
       <button @click="seguir" v-if="store.state.authModule.user.username!==usuario.username" :class="siguiendo?'btn btn-outline':'btn btn-info'">{{siguiendo?'Amigo':'Agregar'}}</button>
       
       </div>
         <div class="fot flex items-center justify-center col-span-1 ">
       <div class="w-10 h-10 bg-slate-700 rounded-full overflow-hidden flex justify-center items-center">
        <img class="w-15 h-15 " src="/src/assets/nar.png" alt="">
       </div>
       </div>
        </div>
        </div>
        
       </div>


       <div class="row-span-1 ">
       
       <div class="flex items-center  h-14 border-zinc-600 border-t-2">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-base font-medium w-full justify-around">
                <li>
                   <router-link to="home"  class="text-gray-900 dark:text-white hover:underline">Home</router-link>
                </li>
                <li>
                <router-link to="amigos" class="text-gray-900 dark:text-white hover:underline">Amigos</router-link>
                </li>
                <li>
                    <a :href="'/perfil/'+router.params.id" class="text-gray-900 dark:text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="" class="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
       </div>
            <ModalPutVue label="my-modal" :tipo="tipoPost"/>
            <FullImageVue label="imagen" :publicacion="usuario.avatar"/>
       </div>

          <router-view/>
        </div>




</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useMutation, useQuery } from "@vue/apollo-composable"
import { GETUSUARIO } from '../../../graphql/querys';
import { useRoute,useRouter  } from 'vue-router';
import { IPublicacion, IUser, Ttipo } from "../../../interface/models";
import { useStore } from "vuex";
import { GMuta } from "../../../graphql";
import FullImageVue from '../components/FullImage.vue';
import ModalPutVue from '../components/ModalPut.vue';

 const router = useRoute ()
 const ruta = useRouter ()
const {mutate:addAmigo}=useMutation(GMuta.addAmigo)

const {result,loading}=useQuery(GETUSUARIO,{
  "username": router.params.id
})
const usuario=ref<IUser>()
const store=useStore()

const amigos=ref<IUser[]>()
const irHome=()=>ruta.replace('/about')
const tipoPost=ref("perfil")
const siguiendo=ref(false)
const selectPost=(tipo:Ttipo)=>{
   tipoPost.value=tipo  
}
watchEffect( () => {
      if (!loading.value) {
        usuario.value=result.value.getPerfil.usuario
        amigos.value=result.value.getPerfil.amigos
        siguiendo.value=result.value.getPerfil.siguiendo  
      }
      
    });

const seguir=async()=>{
  await addAmigo({
    "username": router.params.id
  })
  siguiendo.value=!siguiendo.value
  const newvalor=siguiendo.value?usuario.value!.amigos+1:usuario.value!.amigos-1
  usuario.value={...usuario.value,amigos:newvalor}as IUser
}
</script>
<style lang="">
  
</style>