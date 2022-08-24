
 const actions = { 
    register({commit},{user,token}){
       localStorage.setItem('token',token)
       localStorage.setItem('user',JSON.stringify(user))
       commit('loginStore', { user, token })
   },
   
   hola({commit}){
       console.log('hola');
   
   }
}
export default actions