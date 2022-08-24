<template>
    <div :class="{'bg-gray-900 w-full p-5 hidden md:block md:col-span-4':!isPerfil,'hidden ':isPerfil}">
       <h1 class="text-3xl text-slate-200 font-bold">HandBook</h1>
       <p class="text-slate-300 mt-3 font-semibold">Sugerencias</p>
       <div class="mt-7 flex justify-between flex-col p-1 h-3/4" >

       <a v-for="(item, index) in ['Amigos','Home','Perfil']" :key="index"  href="" class="text-slate-300 text-sm font-normal w-1/3 flex justify-between">

       <span class="font-semibold text-base">{{item}}</span>
       </a>
       </div>
    </div>
</template>
<script>

export default{
    props:{
        isPerfil:{
            type:Boolean,
            required:true
        },
      

    },
    data(){
        return{
   

        }
    }
}

</script>
<style>
    
</style>