<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useQuery} from '@vue/apollo-composable'
import { watchEffect } from '@vue/runtime-core';
import { PRUEBA } from './graphql/querys'
import gql from 'graphql-tag'
/* const {result,loading}=useQuery(gql`
  query Query {
  prueba
}
`)
 watchEffect(async()=>{
    if (!loading.value) {
      
      console.log(await result.value);
    }
    
    console.log(loading);
  

})  */

</script>

<template>
<router-view></router-view>

</template>

<style scoped>
*{
  margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
