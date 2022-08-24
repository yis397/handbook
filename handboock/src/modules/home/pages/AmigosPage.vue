<template >
  <div>
  
   <div v-if="loading">
     <progress class="progress w-56"></progress>
   </div>

  <div v-if="!loading" class="w-full mb-20 p-5 grid grid-cols-2 gap-2">
   <div  v-for="(item, index) in result.getAmigos" :key="index" class="grid col-span-1">


   <div class="flex flex-row justify-between">
   
   <router-link :to="'/perfil/'+item.username+'/home'">
   
       <div class="avatar">
  <div class="w-32 rounded">
    <img :src="item.avatar?item.avatar.file:'/src/assets/nar.png'" />
  </div>
</div>
   </router-link>
  

    <div class="">
    <p>{{item.nombre}} {{item.apellidos}}</p>
    <p>{{item.amigos}} amigos</p>
    </div>

  <p>...</p>
   </div>


   </div>


  </div>
  </div>
 
</template>
<script setup>
import { useQuery } from '@vue/apollo-composable';
import { ref, watchEffect } from "vue";
import { useRoute,useRouter  } from 'vue-router';
import { QGETAMIGOS } from '../../../graphql/querys';

 const router = useRoute ()
 const route = useRouter ()
const {result, loading}=useQuery(QGETAMIGOS,{
  "username": router.params.id
})




</script>
<style lang="">
    
</style>