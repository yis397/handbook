import gql from 'graphql-tag'
export const registro=gql`
mutation Mutation($input: IRegistro) {
  registroLogin(input: $input) {
    token
    user {
      nombre
      apellidos
      username
    }
  }
}
`
export const login=gql`
mutation Mutation($input: ILogin) {
  login(input: $input) {
    token
    user {
      nombre
      apellidos
      username
      avatar {
        file
        createdAt
        tipo
      }
      headImg {
        file
        descripcion
        createdAt
      }
    }
  }
}
`
export const postPost=gql`
mutation Mutation($input: IPublicion, $file: Upload) {
  addPublicacion(input: $input, file: $file)
}
`
export const MisLike=gql`
mutation Mutation($idP: ID!) {
  isLike(idP: $idP)
}
`
export const addcomentario=gql`
mutation Mutation($idP: ID!, $comentario: String) {
  addComentario(idP: $idP, comentario: $comentario)
}
`
export const addAmigo=gql`
mutation Mutation($username: String!) {
  addAmigo(username: $username)
}
`