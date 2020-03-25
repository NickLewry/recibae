import { Readable } from "stream";

import { StorageInterface } from "../../cloudstorage/storage";
import { FireStore, FireStoreInterface } from "../../firestore";

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

interface Response {
  filename: string;
  url: string;
}

export const mutationResolvers = {
  uploadRecipe: async (
    parent: any,
    args: ResolverArgs,
    context: ResolverContext
  ): Promise<Response> => {
    const { file } = args;
    const { storageBucket, db } = context;

    const fileToUpload = await file;

    await storageBucket.storeFile(fileToUpload);
    await db.storeRecipe("hi");

    return {
      filename: fileToUpload.filename,
      url: `https://storage.googleapis.com/img-test-nick/${fileToUpload.filename}`
    };
  }
};
