import { buildSchema } from "graphql";

export const authorGraphQLSchema = buildSchema(`
  scalar Date

  type Author {
    _id: String!
    username: String!
    email: String!
    auth: Auth
    likes: Int
    createdAt: Date!
    updatedAt: Date!
  }

  type Auth {
    password: String!
    lastLogin: Date
  }

  input AuthorCreateInput {
    username: String
    email: String
    auth: AuthorAuth
  }

  input AuthorAuth {
    password: String
  }

  type Query {
    getAuthors(page:Int, count:Int): [Author!]!
    getAuthor(id : String!): Author
  }
  type Mutation {
    createAuthor(input: AuthorCreateInput): String
  }
`);
