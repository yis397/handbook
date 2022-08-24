import Comentario from "../models/comentarios";
import Publicacion from "../models/publicacion"
import { IComentario, IUsuario } from '../interfaces/models';
import { PubSub } from 'graphql-subscriptions';
import Usuario from '../models/usuario';

export const maddComentario=async(idPublicacion:string,comentario:string,user:IUsuario,pubsub)=>{
    const exist=await Publicacion.findOne({id:idPublicacion})
    if(!exist)return false;
    
    await Publicacion.updateOne({id:idPublicacion},{comentarios:exist.comentarios+1})
   const comntario= new Comentario({idPublicacion,comentario,idUser:user.id})
   comntario.save()
   const usuario=await Usuario.findOne({_id:user.id}).populate('avatar')
   pubsub.publish('NEW_USER',{subComentarios:{comentario,idUser:usuario}})
    return true
}
export const deletComentario=async(id:string,user:IUsuario)=>{
    if(!user)throw new Error('error en autentificacion')
    const comentario=await Comentario.deleteOne({id})
    return true
}
export const getComentarios=async(idP:string)=>{
    const exist=await Publicacion.findOne({id:idP})
    if(!exist)throw new Error('error en publicacion')
    const comentarios=await Comentario.find({idPublicacion:idP}).populate(({
        path : 'idUser',
        populate : {
          path : 'avatar'
        }
      }))
    return comentarios;
    
}