import { createApp, h, provide } from 'vue'
import App from './App.vue'
import { DefaultApolloClient,provideApolloClient } from '@vue/apollo-composable'

// optionally import default styles
import router from './router/router'
import { apolloClient, apolloProvider } from './graphql/apollo';
import store from './store'




const app= createApp({
  setup(){
    provideApolloClient(apolloClient);
    provide(DefaultApolloClient,apolloClient)
    
  },
 

  render:()=>h(App)
})


app.use(store)
app.use(router)
app.mount('#app')



