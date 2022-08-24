import { ref } from 'vue';
import { GMuta } from '../../../graphql';
import { Ttipo } from '../../../interface/models';
import { useStore } from 'vuex';
import { useMutation } from '@vue/apollo-composable';
export const usePublicacion=()=>{
    const isErrorP=ref(false)
    const store=useStore()
    const {mutate:addPublicacion}= useMutation(GMuta.postPost)
    const putPublicacion=async(tipo:Ttipo,data:any)=>{
        if(!data.file)return
        try {
            
              switch (tipo) {
                
                case "head":
                case "perfil":
            
                    const resp=await  addPublicacion({
                 
                        input: {
                        tipo: tipo,
                        descripcion: data.descripcion
                      },
                      file: data.file
                     })
    
                store.commit('updateAvatar',{url:resp?.data.addPublicacion,tipo:tipo=='perfil'?'avatar':"headImg",descripcion:data.descripcion??""})
                isErrorP.value=true
                break
    
                default:
                      isErrorP.value=true;
                      break
              }
              
          } catch (error) {
              isErrorP.value=false
        }
    }
    const reset=()=>isErrorP.value=false
   return {isErrorP,putPublicacion,reset}
}

