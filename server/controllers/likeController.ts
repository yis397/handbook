import { IUsuario } from "../interfaces/models"
import Like from "../models/like"
import Publicacion from "../models/publicacion"

export const isLike=async(idP:string,{id}:IUsuario)=>{
   const exist=await Like.findOne({idPublicacion:idP,idUser:id})
   const publicacion =await Publicacion.findOne({_id:idP}) 
   if (exist&&publicacion) {
    if (publicacion.likes!=0) {
        await Publicacion.findOneAndUpdate({_id:idP,},{likes:publicacion.likes-1})
        
    }
    await Like.deleteOne({id:exist.id})
    return true
   }
   if (publicacion) {
       await Publicacion.findOneAndUpdate({_id:idP,},{likes:publicacion.likes+1})
       
   }
   await new Like({idPublicacion:idP,idUser:id}).save()
   return true
}
