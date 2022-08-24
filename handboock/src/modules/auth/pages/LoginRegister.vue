<template >
    <div class="">
    <!-- <PruebaVue nombre="hola" :count="count" @sumar="sumar"/> -->
    
    <div class="grid grid-cols-2 mt-20">
    
        <div class="w-full h-96 col-span-1 p-3 flex justify-center items-center flex-col">
        
           <div class="w-full h-full bg-gray-700 rounded-md p-5">
              <p class="text-accent font-bold text-5xl">handbook</p>
              <p class="text-gray-400 font-semibold text-2xl mt-2">Inicios de sesión recientes</p>
              <p class="text-gray-200 font-semibold text-1xl mt-2">Haz clic en tu foto o agrega una cuenta</p>
              <div class="flex flex-row items-start mt-5 justify-around">

              <label class="avatar block cursor-pointer">
  <div class="w-32 rounded">
    <img src="https://placeimg.com/192/192/people" />
  </div>
  <p class="text-center font-semibold text-slate-300">Jesus Antonio</p>
</label>

             <div class="flex justify-center items-center flex-col ">
    <label class="cursor-pointer rounded-full w-16 h-16 bg-emerald-700 flex justify-center items-center text-5xl text-slate-300 mb-7">+</label>
  <p class="text-center font-semibold text-slate-300">Agregue otra cuenta</p>
            </div>

              </div>
           </div>
        </div>
        <div class="col-span-1 p-3  flex justify-center items-center"> 
          <div class="w-2/3 h-full flex flex-col items-center justify-between bg-gray-700 rounded-md p-5">
          <form @submit.prevent="funLogin">
          <input type="text" v-model="login.usuario" placeholder="Type here" class="input w-full max-w-xs " />
          <input type="text" v-model="login.password" placeholder="Type here" class="input w-full max-w-xs mt-2" />
          <span v-if="isError" class=" text-white bg-error rounded-md">{{error}}</span>
          <button type="submit" class="btn w-full btn-accent mt-2" >Iniciar Secion</button>

          </form>
          <a href="" class="text-accent" >olvidaste tu contraseña?</a>
          <label for="modal-register" class="btn w-full btn-success">Registrate</label>
          </div>
        </div>


        <input type="checkbox" id="modal-register" class="modal-toggle"/>
<div class="modal">
  <div class="modal-box flex flex-col w-6/12 max-w-5xl h-5/6 max-h-5xl">
  <p class="mb-5 text-center text-slate-300 text-3xl font-bold">Registrate</p>
    <form @submit.prevent="funRegistrar">
          <div class="flex flex-row w-full">
          <input  type="text"  v-model="register.nombre" placeholder="Nombre"  class="input w-full max-w-xs " />
          <label for="modal-register" class="text-lg ml-auto cursor-pointer">X</label>
          </div>
          <input type="text" v-model="register.apellidos" placeholder="Apellido" class="input w-full  mt-2" />
          <input type="text" v-model="register.username" placeholder="username" class="input w-full  mt-2" />
          <input type="email" v-model="register.email" placeholder="Email" class="input w-full  mt-2" />
          <input type="password" v-model="register.password" placeholder="password" class="input w-full  mt-2" />
          <input type="password" v-model="register.password2" placeholder="Confirmar password" class="input w-full  mt-2" />
          <span v-if="isError" class="text-white bg-error rounded-md">{{error}}</span>
          <button   class="btn w-full btn-accent mt-2" type="submit">Iniciar Secion</button>
          </form>
  </div>


</div>
    </div>
    </div>
</template>
<script setup>

import { ref } from "@vue/reactivity";
import { useForm } from '../hooks';
import { watchEffect } from '@vue/runtime-core'
const {isError,error,setDatos,reset}=useForm()

const login=ref({
  usuario:"",
  password:""
})
const register=ref({
  nombre:"",
  apellidos:"",
  email:"",
  username:"",
  password:"",
  password2:""
})
const funLogin=()=>{
  reset()
  setDatos(login.value,['usuario','password'],"login")
}
const funRegistrar=()=>{
  reset()
  setDatos(register.value,['nombre','apellidos','email','password','password2'],"register")


}


</script>
<style l>
    
</style>