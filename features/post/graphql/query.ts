import { buildSchema } from "graphql";

const postGraphQLSchema = buildSchema(`
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
    getPosts: [Post!]!
    getPost(id : String!): Post
  }
  type Mutation {
    createPost(input: PostCreateInput): String
  }
`);

export default postGraphQLSchema;
