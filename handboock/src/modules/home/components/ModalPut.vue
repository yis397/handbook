<template>
    <div>
    <input type="checkbox" :id="label" class="modal-toggle"/>
<div class="modal">
  <div class="modal-box flex flex-col w-11/12 max-w-5xl h-5/6 max-h-5xl">
    <div class="h-4/5 w-full bg-slate-400">
      <div class=" w--full h-5/6 justify-center flex items-center flex-col">
      


    <form enctype="multipart/form-data" class="flex justify-center items-center w-full ">
    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
    <img class="object-scale-down h-60 w-full" :src="formDat.image" alt="">
           
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input @change="selectedFile" id="dropzone-file" type="file"  />
    </label>
</form> 

        
  </div>
    </div>
    

    <form @submit.prevent="cargarPublicacion" class="h-1/5 w-full flex justify-center items-center">
    <input v-model="formDat.descripcion" type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs" />

    <button  type="submit">Publicar</button>
    <button  @click="add">sad</button>
  
    <!--  <label :for="props.label" class="btn">Publicar</label> -->
      <label  :for="props.label" class="btn btn-warning">Cancelar</label>
    </form>
  </div>
</div>
    </div>
</template>
<script setup lang="ts" >
import { computed, watchEffect } from 'vue';
import { ref } from 'vue-demi';
import { usePublicacion } from '../hooks/usePublicacion';
import { useStore } from 'vuex'
import { Ttipo } from '../../../interface/models';
const store=useStore()
    const {isErrorP,putPublicacion,reset}=usePublicacion()
    const formDat=ref({descripcion:'',file:'' as any,image:'' as any})
    const props=defineProps<{
    label:string,
    tipo:Ttipo
    }>()
    const add=()=>{
      console.log('saddas');
      console.log(store.state)
    }
    const selectedFile = (e) => {
      reset()
       let file=e.target.files[0]
       formDat.value.file=file
       cargarImagen(file) 
    };
    const cargarImagen=(file)=>{
      let reader=new FileReader()
      reader.onload=(e:any)=>{
        formDat.value.image=e.target.result
        
      }
      
      reader.readAsDataURL(file)
    }
    const cargarPublicacion=async()=>{
     await putPublicacion(props.tipo,formDat.value)
        }

</script>
<style >
    .dropzone {
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px dashed #41b883;
  background-color: #fff;
  transition: 0.3s ease all;
  
}
.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #41b883;
  
}
</style>