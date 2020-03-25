import { ApolloServer } from "apollo-server";
import { Storage } from "@google-cloud/storage";
import { Firestore } from "@google-cloud/firestore";

import { schema } from "./schema";
import { resolvers } from "./resolvers";
import { FireStore } from "./firestore";
import { StorageBucket } from "./cloudstorage/storage";

async function main() {
  const storageBucket = new StorageBucket(
    new Storage({
      projectId: "elegant-gearing-270911",
      keyFilename: "./storage-test.json"
    })
  );

  const db = new FireStore(
    new Firestore({
      projectId: "elegant-gearing-270911",
      keyFilename: "./storage-test.json"
    })
  );

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: () => ({
      storageBucket,
      db
    })
  });

  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
}

main().catch(err => console.log("Error: ", err));
