import { ref } from '@vue/reactivity';
import { useMutation } from "@vue/apollo-composable";
import { useStore } from 'vuex'
import { GMuta } from "../../../graphql";
import { useRouter } from 'vue-router'
import { login } from '../../../graphql/mutation';
type whatForm=|"login"|"register"
export const useForm=()=>{
    
    const {mutate:registroLogin}=useMutation(GMuta.registro)
    const {mutate:Login}=useMutation(GMuta.login)
    const store = useStore()

    const isError=ref(false)
    const error=ref("")
    const router = useRouter()

    const setDatos=async(forms:any,list:Array<string>,form:whatForm)=>{
        for (let i = 0; i < list.length; i++) {
          if ((forms[list[i]] as string).length===0) {
             isError.value=true
             error.value="se requiere "+list[i]
             return
          }
        }
        if (forms.password2) {
            if (forms.password2!=forms.password){ 
                isError.value=true 
                error.value="password invalidos"
                return}
        }
        
        switch (form) {
            case "register":
               try {
                const dat =await registroLogin({
                    input: {
                         nombre: forms.nombre,
                        apellidos: forms.apellidos,
                        password: forms.password,
                        email: forms.email,
                        username: forms.username
                            },
                  })

                  const {user,token}=dat?.data.registroLogin
                  isError.value=false
                  store.dispatch('register',{user,token})
                  setTimeout(() => {
                    router.replace('/perfil/'+user.username) 
                }, 500);
               } catch (err) {
                
                isError.value=true    
                error.value=err.message.replace('GraphQL error:',"")
            }
            return;
            case "login":
                try {
                    const dat= await Login({
                    input: {
                        email:forms.usuario,
                        password: forms.password
                      }
                    })
                    isError.value=false 
                    const {user,token}=dat?.data.login
                    store.dispatch('register',{user,token})
              
                    setTimeout(() => {
                        router.replace('/perfil/'+user.username) 
                    }, 500);
                } catch (err) {
                    console.log(err);
                    isError.value=true    
                    error.value=err.message.replace('GraphQL error:',"") 
                }
            default:
                break;
            }

    }

    const reset=()=> isError.value=false
    
    return{isError,error,reset,setDatos}

 }