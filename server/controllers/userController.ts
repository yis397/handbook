import bcryptjs from 'bcryptjs';
import { IUsuario, IPublicacion } from '../interfaces/models';
import Usuario from "../models/usuario";
import Amigo from '../models/amigo';
import * as token from '../utils/jwsToken';
import Publicacion from '../models/publicacion';
import Like from '../models/like';

export const registroLogin=async({nombre,email,password,username,apellidos}:any)=>{
    if ((password as string).length<6)throw new Error('password incorecto')
    const exist=await  Usuario.findOne({email})
    if (exist)throw new Error('usuario existente')
    const existUsername=await Usuario.findOne({username})
    if (existUsername)throw new Error('username  existente')
    const salt=await bcryptjs.genSalt(10)
    const newPass=await bcryptjs.hash(password,salt)
    const user=new Usuario({email,password:newPass,username,apellidos,nombre})
    user.save();
    await new Amigo({idUser:user.id}).save()
    return {token:token.getToken(user),user}
  }
  
  export const login=async({password,email,}:any)=>{
    let user;
     if ((email as string).includes('@')||(email as string).includes('.com')) {
      user=await Usuario.findOne({email})
     }else{
      user=await Usuario.findOne({username:email}).populate('avatar')
     }
     if (!user)throw new Error("Usuario inexistente");
     
     
     return {token:token.getToken(user),user}
     
  }
  export const getPerfil=async(username:string,user:IUsuario)=>{
     const usuario=await Usuario.findOne({username}).populate('avatar').populate('headImg');
     if (!usuario)throw new Error("Error, no existe usuario");
     const amigos= await Amigo.findOne({idUser:usuario._id})
     .populate(({
      path : 'friendId',
      populate : {
        path : 'avatar'
      }
    }))
     const siguiendo=user?(amigos!.friendId as any).find(e=>e.username===user.username):null
     const listpublicaciones=await Publicacion.find({idUser:usuario.id}).populate(({
      path : 'idUser',
      populate : {
        path : 'avatar'
      }
    }))
     let publicaciones:IPublicacion[]=[];
     for (let i = 0; i < listpublicaciones.length; i++) {
      let isLike=false
      
      const existLike=await Like.findOne({id:listpublicaciones[i].id,idUser:user.id})
      if (existLike) {
         isLike=true
      }
      
      publicaciones.push({
         id:         listpublicaciones[i].id,
         idUser:    listpublicaciones[i].idUser,
         descripcion:listpublicaciones[i].descripcion,
         createdAt:  listpublicaciones[i].createdAt,
         file:      listpublicaciones[i].file,
         tipo:      listpublicaciones[i].tipo,
         likes:     listpublicaciones[i].likes,
         comentarios:listpublicaciones[i].comentarios,
         isLike}
         )   
     }

     return {usuario,amigos,siguiendo:siguiendo?true:false,publicaciones}  
  }