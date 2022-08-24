import { PubSub } from "graphql-subscriptions";
import * as Amigos from "../controllers/amigosController";
import * as Comentario from  "../controllers/cometarioController";
import * as Like from "../controllers/likeController";
import * as publicacion from "../controllers/publicacionController";
import * as user from "../controllers/userController";

const resolvers={

    Upload: require("graphql-upload-minimal").GraphQLUpload,
    Query:{
        prueba:(_:any,{}:any,ctx:any)=>{
            return "nop"
        },
        getAmigos:(_:any,{username}:any,ctx:any)=>Amigos.getAmigos(username),
        getPerfil:(_:any,{username}:any,ctx:any)=>user.getPerfil(username,ctx.user),
        getPublicaciones:(_:any,{page}:any,ctx:any)=>publicacion.getMorePublicacionPerfil(page,ctx.user),
        getComentarios:(_:any,{idP}:any,ctx:any)=>Comentario.getComentarios(idP)
    },
    Mutation:{
        
        registroLogin:(_:any,{input}:any)=>user.registroLogin(input),
        login:(_:any,{input}:any)=>user.login(input),
        addPublicacion:(_:any,{input,file}:any,ctx:any)=>publicacion.addPublicacion(input,file,ctx.user),
        addAmigo:(_:any,data:any,ctx:any)=>Amigos.addAmigo(data,ctx.user),
        isLike:(_:any,{idP}:any,ctx:any)=>Like.isLike(idP,ctx.user),
        addComentario:(_:any,{idP,comentario}:any,ctx:any)=>Comentario.maddComentario(idP,comentario,ctx.user,ctx.pubsub)
    },
    Subscription:{
        subComentarios:{
            subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator('NEW_USER')
          }
    }
    };
export default resolvers;