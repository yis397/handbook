import { IPublicacion, IUsuario } from "../interfaces/models";
import Publicacion from "../models/publicacion";
import { awsUploadImage } from "../utils/aws-helps";
import Usuario from '../models/usuario';
import Amigo from '../models/amigo';
import Like from "../models/like";

export const addPublicacion=async({tipo,descripcion}:any,file:any,user:IUsuario)=>{
  if (!user)return Error("Error, no existe usuario");
  const idU=Date.now().valueOf().toString();
  const {createReadStream,mimetype}=await file
  const extencion=mimetype.split("/")[1]
  const imagenName='publicaciones/'+idU+"."+extencion
  const fileData=createReadStream()
  try {
  const resp=await awsUploadImage(fileData,imagenName)
  const newPubl=await new Publicacion({file:resp,descripcion:descripcion??"",idUser:user.id,tipo:"perfil"})
  newPubl.save()
  switch (tipo) {
    case "perfil":
      await Usuario.updateOne({_id:user.id},{avatar:newPubl.id})
 
      break;
    case "head":
      await Usuario.updateOne({_id:user.id},{headImg:newPubl.id})
      break;
    default:
      break;
  }
  return resp
} catch (error) {
  console.log(error);
  Error("Error, en publicacion");  
  return "nop"
  }
 
}
export const getMorePublicacionPerfil=async(page:number,{id}:IUsuario)=>{

  const amigoslist=await Amigo.findOne({idUser:id}).populate(({path:'friendId',populate:{path:'avatar'}}))
  const amigos=amigoslist.friendId.map((e)=>e)
  const idsAmigos=amigos.map((e)=>e._id)

    const listPubli=await Publicacion.find({idUser:{$all:idsAmigos}},).populate(({path:'idUser',populate:{path:'avatar'}}))
    let publicaciones:IPublicacion[]=[];
     for (let i = 0; i < listPubli.length; i++) {
      let isLike=false
      
      const existLike=await Like.findOne({id:listPubli[i].id,idUser:id})
      if (existLike) {
         isLike=true
      }
      
      publicaciones.push({
         id:         listPubli[i].id,
         idUser:    listPubli[i].idUser,
         descripcion:listPubli[i].descripcion,
         createdAt:  listPubli[i].createdAt,
         file:      listPubli[i].file,
         tipo:      listPubli[i].tipo,
         likes:     listPubli[i].likes,
         comentarios:listPubli[i].comentarios,
         isLike}
         )   
     }
    
    return publicaciones
}
