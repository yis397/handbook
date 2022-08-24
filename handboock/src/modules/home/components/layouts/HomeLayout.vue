<template>
    <div :class="{'grid grid-cols-7 md:grid-cols-4 relative':!isPerfil,'grid grid-cols-8':isPerfil}">

    <div class="col-span-1 grid grid-cols-5">
    
    <nav :class="{'nav bg-gray-800 w-full col-span-5 md:col-span-1':!isPerfil,'nav bg-gray-800 w-full md:w-1/2 col-span-5':isPerfil}">
      <div class="flex justify-around flex-col items-cente items-center h-2/4">

      <div class="fot dropdown dropdown-right flex items-center justify-center col-span-1 ">

       <label tabindex="0" class="w-10 h-10 bg-gray-700 rounded-full overflow-hidden flex justify-center items-center">
        <img class="w-15 h-15 " :src="store.state.authModule.user.avatar?store.state.authModule.user.avatar.file:'/src/assets/nar.png'" alt="">
       </label>

       <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li @click="logout" class="btn">Logout</li>
    <li><router-link :to="'/perfil/'+store.state.authModule.user.username+'/home'">ir a muro</router-link></li>
       </ul>
    </div>

      <a href="" class="hover:bg-gray-700 w-2/3 h-10 rounded-lg flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
</svg>
      </a>
      
      <div class="dropdown dropdown-right flex justify-center items-center w-full">
      
      <label tabindex="0" for="my-drawer" class="hover:bg-gray-700 w-2/3 h-10 rounded-lg flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
      </label>
      <div tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-96">
    <p class="text-center text-lg text-slate-300">Busca...</p>
          <input type="text" placeholder="Type here" class="input w-full max-w-xs " />
    
  </div>
      </div>

      

      <div class="indicator w-full dropdown dropdown-right dropdown-end">
  <span class=" indicator-item badge badge-secondary">99+</span> 
  <label tabindex="0"  class=" w-full hover:bg-gray-700  h-10 rounded-lg flex justify-center items-center">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
</svg>
  </label >
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li >Logout</li>
    <li><a>ir a muro</a></li>
  </ul>
</div>



<div class="indicator w-full dropdown dropdown-right dropdown-end">
  <span class=" indicator-item badge badge-secondary">99+</span> 
  <label tabindex="0"  class=" w-full hover:bg-gray-700  h-10 rounded-lg flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
</svg>
  </label >
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>



 
      </div>
      <div class="flex justify-around flex-col items-cente items-center h-1/4">
      <div class="bg-gray-600 w-2/3 h-14 rounded-lg flex flex-col justify-center items-center">
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
</svg>
      </span>
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>
      </span>
      </div>
  
      </div>
    </nav>


    
   <NavBarTwoVue  :isPerfil="isPerfil"/>

    </div>

    <div :class="{' col-span-6 md:col-span-2 bg-gray-900 ':!isPerfil,'col-span-7 bg-gray-900':isPerfil}">
        <router-view/>
    </div>     

    <div :class="{' hidden':isPerfil,'col-span-1  bg-gray-900 hidden md:block':!isPerfil}">

     <NavRightVue/>
     </div>
        <!-- start chat -->
       <div class="chat w-full p-2 flex flex-row items-end h-auto">
         
           <div class="collapse  w-4/6 md:w-1/5 rounded-md mr-2">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-slate-700 text-primary-content peer-checked:bg-slate-700 peer-checked:text-secondary-content">
    Jeus Antonio Hernan
  </div>
  <div class="collapse-content bg-slate-700 text-primary-content peer-checked:bg-slate-700 peer-checked:text-secondary-content"> 
    <div class="chatbody h-72 w-full ">

    <div class="flex flex-row">
    <div class="fot flex items-end justify-center  ">
       <div class="w-10 h-10 bg-gray-700 rounded-full overflow-hidden flex justify-center items-center">
        <img class="w-15 h-15 " src="/src/assets/nar.png" alt="">
       </div>
    </div>
    <div class="w-2/3 bg-slate-500 rounded-xl p-1" >
    <p class="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam est, dignissimos ad incidunt facilis reiciendis explicabo a qu</p>
    </div>
    </div>


     <div class="flex flex-row">
    <div class="fot flex items-end justify-center  ">
       <div class="w-10 h-10 bg-gray-700 rounded-full overflow-hidden flex justify-center items-center">
        <img class="w-15 h-15 " src="/src/assets/nar.png" alt="">
       </div>
    </div>
    <div class="w-2/3 bg-slate-500 rounded-xl p-1" >
    <p class="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam est, dignissimos ad incidunt facilis reiciendis explicabo a qu</p>
    </div>
    </div>

    </div>
    <div class="form-control">
  <div class="input-group w-full">
    <input type="text" placeholder="" class="input input-bordered w-full" />
    <button class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
  </div>
  <!-- end chat -->
</div>





       </div>
    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, defineComponent, onMounted } from '@vue/runtime-core'
import { watchEffect,watch } from 'vue'
import NavRightVue from '../NavRight.vue';
import NavBarTwoVue from '../NavBarTwo.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

        const store=useStore()
        const ruta=useRouter()
        const isPerfil=ref(false)
  

      watchEffect(()=>{
      store.commit('isUser')
      isPerfil.value=window.location.href.includes('perfil')
      })



const logout=()=>{
  store.commit('logout')
  ruta.push('/about')
}
</script>
<style >
.nav{
    height: 100vh;
}
.chat{
  position: fixed;
   left: 0;
   bottom: 0;
   text-align: center;
}
.chatbody{
  overflow-y: auto;
}
    
</style>