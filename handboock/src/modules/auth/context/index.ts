import * as state from './state'
import  actions from './actions'
import  mutations from './mutations'
const authModule={
    namespace:true,
    state: {
        isAuth:false,
        user:null,
        token:null
          },
    actions,
    mutations
}

export default authModule