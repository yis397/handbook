
import {gql} from "apollo-server-express"

export const typeDefs=gql`

type Usuario{
    id:ID,
    nombre:String,
    username:String,
    apellidos:String,
    email:String,
    avatar:Publicacion,
    headImg:Publicacion,
    createdAt:String,
    amigos:Int,
    publicaciones:Int
 }
 type Perfil{
   siguiendo:Boolean
   usuario:Usuario
   amigos:[Usuario]
   publicaciones:[Publicacion]
 }
 type Publicacion{
   id:ID,
    idUser:Usuario,
    descripcion:String,
    createdAt:String,
    file:String,
    tipo:String,
    likes:Int,
    comentarios:Int
    isLike:Boolean

 }
 type Like{
   id:ID
    idPublicacion:ID,
    idUser:ID,
    createAt:String,
 }
 type Comentario{
   id:ID
    idPublicacion:ID,
    idUser:Usuario,
    createdAt:String,
    comentario:String,
 }
 type Token{
  token:String,
  user:Usuario
 }
 type Home{
  publicaciones:[Publicacion],
  amigos:[Usuario]
 }

 #input
 scalar Upload
 input IRegistro{
    nombre:String!,
    apellidos:String!,
    email:String!,
    password:String!,
    username:String!,
 }
 input ILogin{email:String!,password:String!}
 input IPublicion{tipo:String!,descripcion:String}
 input IFollow{tipo:String!,following:ID!}

 type Query{
      #user
      getUsuarioToken(token:String!):Usuario
      getPerfil(username:String!):Perfil
      #amigo
      getAmigos(username:String!):[Usuario]
      #comentario
      getComentarios(idP:ID):[Comentario]
      #publicacion
      getPublicaciones(page:Int):[Publicacion]
      prueba:String
      
  }
 type Mutation{
   #user
  registroLogin(input:IRegistro):Token
  login(input:ILogin):Token
  #amigo
  addAmigo(username:String!):Boolean
  #publicacion
  addPublicacion(input:IPublicion,file: Upload):String
  #comentario
  addComentario(idP:ID!,comentario:String):Boolean
  deletComentario(id:ID!):Boolean
  #like
  isLike(idP:ID!):Boolean
 }

 type Subscription {
  subComentarios: Comentario!
}
`;
