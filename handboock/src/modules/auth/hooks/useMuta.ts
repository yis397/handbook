
import { ref } from "vue";

export const useMuta=async()=>{
    const errorServ=ref("")
    const isServError=ref(false)
    const data=ref()
    const post=async(funcion:any)=>{
        console.log('hola');
      try {
         data.value=await funcion
      } catch (err) {
        errorServ.value=err.message.replace('GraphQL error:',"")
      }  
    }
    return{errorServ,isServError,data,post}
}