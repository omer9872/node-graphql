import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { mergeSchemas } from '@graphql-tools/schema'
import dotenv from 'dotenv';
dotenv.config();

import { authorGraphQLResolver, authorGraphQLSchema } from './features/author/graphql/index';
import { postGraphQLResolver, postGraphQLSchema } from './features/post/graphql/index';

import './repo';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: mergeSchemas({
    typeDefs: [authorGraphQLSchema, postGraphQLSchema],
    resolvers: [authorGraphQLResolver, postGraphQLResolver]
  }),
  graphiql: true,
}));
app.listen(process.env.GRAPHQL_PORT);
console.log(`Running a GraphQL API server at http://localhost:${process.env.GRAPHQL_PORT}/graphql`);