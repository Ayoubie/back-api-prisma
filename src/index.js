const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');
const resolvers = require('./resolvers');
require('dotenv').config()


const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint:
        process.env.ENDPOINT,
    }),
  }),
})

server.start(
    () => console.log(`GraphQL server is running on http://localhost:4000`)
)

// const { GraphQLServer } = require('graphql-yoga')
 
// const typeDefs = `
//  type Query {
//  hello: String!
//  }
// `
 
// const resolvers = {
//  Query: {
//  hello: (_, args, context, info) => {
//     return "Hello World";
//  },
//  }
// }
 
// const server = new GraphQLServer({ typeDefs, resolvers })
// server.start(() => console.log('Server is running on localhost:4000'))