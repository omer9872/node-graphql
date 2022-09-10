import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { mergeSchemas } from '@graphql-tools/schema'

import authorGraphQLResolver from './features/author/graphql/mutation';
import authorGraphQLSchema from './features/author/graphql/query';
import postGraphQLResolver from './features/post/graphql/mutation';
import postGraphQLSchema from './features/post/graphql/query';

import './repo';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: mergeSchemas({
    typeDefs: [authorGraphQLSchema, postGraphQLSchema],
    resolvers: [authorGraphQLResolver, postGraphQLResolver]
  }),
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');