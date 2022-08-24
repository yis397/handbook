
import {createRouter,createWebHashHistory} from 'vue-router'
import home from '../modules/home/routes/route'
import Login from '../modules/auth/router/route'

const routes = [
    { path: '/', ...home},
    { path: '/about',  ...Login},
    
  ]
  
  const router = createRouter({

    history: createWebHashHistory(),
    routes, 
  })
  export default router