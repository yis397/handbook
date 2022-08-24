import { IStateAuth, IUser, IPublicacion } from '../../../interface/models';

const mutations={

     loginStore:(state,{ user, token })=>{
   
        if(!token)return
        state={isAuth:true,user,token}
     
     },
      isUser:(state)=>{
        const token=localStorage.getItem('token')
        if(!token)return
        if(!localStorage.getItem('user'))return
        const user=JSON.parse(localStorage.getItem('user')??"")
        state.isAuth=true
        state.user=user
        state.token=token 
    },
    updateAvatar:(state,{url,tipo,descripcion})=>{
        const user:IUser={...state.user,[tipo]:{file:url,descripcion,createdAt:new Date(),likes:0,comentarios:0}as IPublicacion}
        localStorage.setItem('user',JSON.stringify(user))
        state.user=user
        console.log(state.user)
        localStorage.setItem('user',JSON.stringify(user))
        
    },
    logout:(state)=>{
    const user:IUser={nombre:"",apellidos:"",username:"",amigos:0}
    state.user=user
    state.isAuth=false
    state.token=""
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    }
}
export default mutations
/*

export const isUser=(state)=>{
    const token=localStorage.getItem('token')
    if(!token)return
    if(!localStorage.getItem('user'))return
    const user=JSON.parse(localStorage.getItem('user')??"")

    state.isAuth=true
    //user,token
   
}
export const logout=(state)=>{
    const user:IUser={nombre:"",apellidos:"",username:""}
    state.isAuth=false
    state.user=user
    state.token=null??""
    localStorage.removeItem("token")
}
export const hola=(state)=>{
    console.log('hola');

} */