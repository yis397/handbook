import { IUsuario } from '../interfaces/models';
import Amigo from '../models/amigo';
import Usuario from '../models/usuario';

export const addAmigo=async({username}:{username:String},user:IUsuario)=>{
  
   const exist=await Usuario.findOne({username})
    if (!exist||!user) throw new Error("datos incorrectos");
   const find=await Amigo.findOne({idUser:user.id})
  const siguiendo=(find?.friendId as any).find(e=>e.toString()===exist.id)
    if (!siguiendo) {
        try {
 
           await  Amigo.findOneAndUpdate({idUser:user.id},{$push:{friendId:exist.id}})
           await  Amigo.findOneAndUpdate({idUser:exist.id},{$push:{friendId:user.id}})
           await Usuario.updateOne({_id :user.id}, {$inc : {'amigos' : 1}})
           await Usuario.updateOne({_id :exist.id}, {$inc : {'amigos' : 1}})
           return true 
        } catch (error) {
           return false 
        }
    }
    await Usuario.updateOne({_id :user.id}, {$inc : {'amigos' : -1}})
    await Usuario.updateOne({_id :exist.id}, {$inc : {'amigos' : -1}})

    await Amigo.findOneAndUpdate({idUser:user.id},{$pull:{friendId:exist.id}})
    await Amigo.findOneAndUpdate({idUser:exist.id},{$pull:{friendId:user.id}})
    return true;

}
export const getAmigos=async(username)=>{
   if (!username)throw new Error("error en autentificacion")
   const user= await Usuario.findOne({username})
   try {
      const amigos=await Amigo.findOne({idUser:user?._id}).populate(({
         path : 'friendId',
         populate : {
           path : 'avatar'
         }
       }))
      const newAmigos=amigos?.friendId.map(e=>e)
      return newAmigos
   } catch (error) {
      throw new Error("error en servidor");
      
   }
   
}