import { Readable } from "stream";

import { FireStoreInterface, Recipe } from "../../firestore";
import { StorageInterface } from "../../cloudstorage/storage";

export interface File {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Readable;
}

interface ResolverArgs {
  file: Promise<File>;
}

interface ResolverContext {
  storageBucket: StorageInterface;
  db: FireStoreInterface;
}

export const mutationResolvers = {
  uploadRecipe: async (
    parent: any,
    args: ResolverArgs,
    context: ResolverContext
  ): Promise<Recipe> => {
    const { file } = args;
    const { storageBucket, db } = context;

    const fileToUpload = await file;

    await storageBucket.storeFile(fileToUpload);
    const storedRecipe = await db.storeRecipe("hi");

    return {
      id: storedRecipe.id,
      url: storedRecipe.url,
      name: storedRecipe.name,
      userId: storedRecipe.userId
    };
  }
};
