import { ApolloServer } from "apollo-server";

import { schema } from "./schema";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch(err => console.log("Error: ", err));
