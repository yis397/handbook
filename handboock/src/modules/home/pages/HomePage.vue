<template >
    <div class="body w-full flex-col flex pt-32 lg:pt-16 px-2">
            <!-- STORY -->
            <div class="relative flex space-x-2 pt-4 bg-gray-800 rounded-lg p-2">
                <div class="w-1/4 sm:w-1/6 h-44 rounded-xl shadow overflow-hidden flex flex-col group cursor-pointer">
                    <div class="h-3/5 overflow-hidden">
                        <img :src="store.state.authModule.user.avatar?store.state.authModule.user.avatar.file:'/src/assets/gati.jpg'" alt="picture" class="group-hover:transform group-hover:scale-110 transition-all duration-700">
                    </div>
                    <div class="flex-1 relative flex items-end justify-center pb-2 text-center leading-none dark:bg-dark-second dark:text-dark-txt">
                        <span class="font-semibold">
                            Create a <br> Story
                        </span>
                        <div class="w-10 h-10 rounded-full bg-blue-500 text-white grid place-items-center text-2xl border-4 border-white dark:border-dark-second absolute -top-5 left-1/2 transform -translate-x-1/2">
                            <i class='bx bx-plus'></i>
                        </div>
                    </div>
                </div>

                 <div v-for="(item, index) in [1,2,3,4]" :key="index" class="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                    <div class="relative h-full group cursor-pointer">
                        <img src="/src/assets/gati.jpg" alt="Story images" class="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full">
                        <div class="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                        <span class="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                            Your story
                        </span>
                        <div class="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                            <img src="/src/assets/nar.png" alt="Profile picture">
                        </div>
                    </div>
                </div>
            </div>
            

            <div class="px-4 mt-4 shadow rounded-lg bg-gray-800 dark:bg-dark-second">
                <div class="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
                    <img :src="store.state.authModule.user.avatar?store.state.authModule.user.avatar.file:'/src/assets/gati.jpg'" alt="Profile picture" class="w-10 h-10 rounded-full">
                    <label for="my-post" class="btn bg-slate-600 w-5/6 rounded-full">
        Que estas pensando?
        </label>
                </div>
                <div class="p-2 flex">
                    <div class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
                        <i class='bx bxs-video-plus'></i>
                        <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
                    </div>
                    <div class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                        <i class='bx bx-images'></i>
                        <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
                    </div>
                    <div class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
                        <i class='bx bx-smile'></i>
                        <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
                    </div>
                </div>
            </div>
            <div class="p-4 mt-4 shadow rounded-lg bg-gray-800 dark:bg-dark-second  ">
                <div class="flex space-x-4 relative">
                    <div class="w-1/2 lg:w-3/12 flex space-x-2 items-center justify-center border-2 border-blue-200 dark:border-blue-700 rounded-full cursor-pointer">
                        <i class='bx bxs-video-plus text-2xl text-purple-500'></i>
                        <span class="text-xs font-semibold text-blue-500">Create Room</span>
                    </div>
                    <div class="relative cursor-pointer">
                        <img src="/src/assets/nar.png" alt="Profile picture" class="rounded-full">
                        <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div class="relative cursor-pointer">
                        <img src="/src/assets/nar.png" alt="Profile picture" class="rounded-full">
                        <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div class="relative cursor-pointer">
                        <img src="/src/assets/nar.png" alt="Profile picture" class="rounded-full">
                        <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div class="relative cursor-pointer">
                        <img src="/src/assets/nar.png" alt="Profile picture" class="rounded-full">
                        <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div class="relative cursor-pointer hidden sm:inline">
                        <img src="/src/assets/nar.png" alt="Profile picture" class="rounded-full">
                        <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div class="relative cursor-pointer hidden sm:inline">
                        <img src="/src/assets/nar.png" alt="Profile picture" class="rounded-full">
                        <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div class="relative cursor-pointer hidden sm:inline">
                        <img src="/src/assets/nar.png" alt="Profile picture" class="rounded-full">
                        <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div class="relative cursor-pointer hidden sm:inline">
                        <img src="/src/assets/nar.png" alt="Profile picture" class="rounded-full">
                        <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div class="relative cursor-pointer hidden sm:inline">
                        <img src="/src/assets/nar.png" alt="Profile picture" class="rounded-full">
                        <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div class="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl text-gray-500 bg-white absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
                        <i class='bx bxs-chevron-right'></i>
                    </div>
                </div>
            </div>
            
           <div v-if="loading" class="mt-3 text-white">Sin Publicaciones</div>
          <div v-if="!loading&&result.getPublicaciones.length!==0" class=" mt-3">
          <div v-for="(item, index) in result.getPublicaciones" :key="index">
           <CardPostVue :item="item"/>
          </div>
          </div>
           <ModalPostVue label="my-post"/>
    </div>

</template>
<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import CardPostVue from '../components/CardPost.vue';
import ModalPutVue from '../components/ModalPut.vue';
import { QGETMURO } from '../../../graphql/querys';
import { watchEffect } from 'vue-demi';
import { useStore } from 'vuex';
const store=useStore()
const {result,loading}=useQuery(QGETMURO,{
  "page": 1
})
watchEffect(()=>{})

</script>
<style lang="">
    
</style>