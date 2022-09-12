import { buildSchema } from "graphql";

export const postGraphQLSchema = buildSchema(`
  scalar Date

  type Post {
    _id: String!
    title: String!
    content: String!
    imageURL: String
    likes: Int
    createdBy: String!
    createdAt: Date!
    updatedAt: Date!
  }

  input PostCreateInput {
    title: String!
    content: String!
    createdBy: String!
  }

  type Query {
    getPosts(page:Int, count:Int): [Post!]!
    getPost(id : String!): Post!
  }
  type Mutation {
    createPost(input: PostCreateInput): String
  }
`);
