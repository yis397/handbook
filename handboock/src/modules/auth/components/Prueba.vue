<template >
    <div>

        <h2>{{props.nombre}}</h2>
        <p>{{props.count}}</p>
        <button @click="emit('sumar')">+</button>
    </div>
</template>
<script setup lang="ts">
const props=defineProps<{
nombre:string,
count:number
}>()
const emit=defineEmits<{
    (event:'sumar'):void
}>()

</script>
<style >
    
</style>