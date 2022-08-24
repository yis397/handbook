import jwt from "jsonwebtoken"
import { IUsuario } from "../interfaces/models";

export const getToken=({nombre,username,apellidos,id}:IUsuario)=>{

   try {

    return jwt.sign({nombre,username,apellidos,id},process.env.SECRET_KEY||"",{expiresIn:'8hr'})
   } catch (error) {
    throw new Error("error en server");
    
   }
}
export const verifyToken=(token:string,clave:string)=>{
   return new Promise((resolve,reject)=>{
      try {
            jwt.verify((token.replace('Bearer ','')),clave,(err,payload)=>{
                 if (err)return reject('no valido')
                 resolve(payload)
            })
      } catch (error) {
            return reject('no valido')
      }})
}