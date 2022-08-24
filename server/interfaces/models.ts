export interface IUsuario{
    id:string,
    nombre:string,
    apellidos:string,
    username:string,
    email:string,
    avatar:IPublicacion,
    headImg:IPublicacion,
    createdAt:string,
    password:string,
    amigos:number,
    publicaciones:number
}
export interface IPublicacion{
    id:string,
    idUser:string,
    descripcion:string,
    createdAt:string,
    file:string,
    tipo:ITipo,
    likes:number,
    comentarios:number,
    isLike?:Boolean
}
type ITipo=
    'publicacion'|'perfil'|'head'

    
export interface IAmigo{
    idUser:string,
    friendId:string,
    createAt:string,
}
export interface IComentario{
    id:string
    idPublicacion:string,
    idUser:string,
    createAt:string,
    comentario:string,
}
export interface ILike{
    id:string
    idPublicacion:string,
    idUser:string,
    createAt:string,
}

 interface IRelacion{
    id:string
    idPublicacion:string,
    idUser:string,
    createAt:string,
}