import gql from 'graphql-tag'

export const PRUEBA = gql`
  query Query {
  prueba
}
`
export const GETUSUARIO = gql`
query Query($username: String!) {
  getPerfil(username: $username) {
    siguiendo
    usuario {
      nombre
      username
      apellidos
      avatar {
        id
        file
        createdAt
        likes
        isLike
        comentarios
        descripcion
      }
      headImg {
        id
        descripcion
        createdAt
        file
        likes
        comentarios
        isLike
      }
      amigos
      publicaciones
    }

  }
}
`
export const QGETPUBLICSCION = gql`
query Query($username: String!) {
  getPerfil(username: $username) {
    usuario {
      nombre
      username
      apellidos}
    publicaciones {
      id
      file
      likes
      comentarios
      isLike
      createdAt
      descripcion
      idUser {
        nombre
        apellidos
        username
        avatar {
          file
        }
      }
    }
  }
}
`
export const  QGETCOMENTARIO = gql`
query Query($idP: ID) {
  getComentarios(idP: $idP) {
    idUser {
      nombre
      username
      avatar {
        file
      }
    }
    comentario
    createdAt
  }
}
`
export const  QGETAMIGOS = gql`
query Query($username: String!) {
  getAmigos(username: $username) {
    nombre
    username
    apellidos
    amigos
    avatar {
      file
    }
  }
}
`
export const  QGETMURO = gql`
query Query {
  getPublicaciones {
    file
    createdAt
    descripcion
    likes
    isLike
    comentarios
    id
    idUser {
      nombre
      username
      apellidos
      avatar {
        file
      }
    }
  }
}
`