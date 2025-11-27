const typeDefs=`#graphql

type User{
  id:ID!
  name:String!
  age:Int!
  username:String!
  nationality:Nationality!
  friends:[User],
  favoriteMovie:[Movie]
}

type Movie{
  id:ID!
  name:String!
  yearOfPublication:Int!
  isInTheaters:Boolean!
}

input CreateUserInput{
  name:String!
  age:Int
  username:String!
  nationality:Nationality
}
type Query{
  users:[User]!
  user(id:ID!):User
  movies:[Movie]!
  movie(name:String!):Movie
}
input UpdateUserNameInput{
  id:ID!
  username:String!
}

type Mutation{
  createUser(user:CreateUserInput!):User!
  updateUserName(user:UpdateUserNameInput!):User!
  deleteUser(userID:ID!):[User]!
}


enum Nationality{
  CANADA
  USA
  GERMANY
  BRAZIL
  INDIA
}
`

export default typeDefs;