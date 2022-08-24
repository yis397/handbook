import {createStore} from 'vuex'
import authModule from '../modules/auth/context/index';

const store=createStore({
    modules:{
        authModule
    }
})
export default store