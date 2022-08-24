export interface IUser{
    nombre:string,
    apellidos:string,
    username:string,
    avatar?:IPublicacion,
    headImg?:IPublicacion,
    amigos:number,
    publicaciones?:number
}
export interface IPublicacion{
    id?          :string,
    idUser?      :IUser,
    descripcion  :string,
    createdAt     :Date,
    file         :string,
    tipo?        :Ttipo,
    likes        :number,
    comentarios  :number,
    isLike?      :boolean,
}
export interface IComentario{
    id:string
    idPublicacion:string,
    idUser:IUser,
    createAt:string,
    comentario:string,
}
export interface IStateAuth{
    isAuth:boolean,
    user:IUser,
    token:string
}
export type Ttipo=
|'publicacion'|'perfil'|'head'