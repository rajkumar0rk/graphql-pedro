import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone'
import typeDefs from './schema/type-defs.ts';
import resolvers from './schema/resolver.ts';

const server= new ApolloServer({typeDefs,resolvers});

const {url}=await startStandaloneServer(server,{
  listen:{port:4000}
})
 
    console.log(`Server is running at ${url}`);
