import HomePage from '../pages/HomePage.vue'
import HomePerfil from '../pages/HomePerfil.vue'
import AmigosPage from '../pages/AmigosPage.vue'
const routerPerfil={
    path:'/perfil/:id',
    name:'perfil',
    component:()=>import( '../pages/PerfilPage.vue'),
    children:[
        { path: 'home', component:  HomePerfil},
        { path: 'amigos', component:  AmigosPage}

    ]
}
export default{
    name:'hand',
    component:()=>import( '../components/layouts/HomeLayout.vue'),
    children:[
        { path: '', component:  HomePage},
        {    ...routerPerfil},

    ]
}