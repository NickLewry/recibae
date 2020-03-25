import { pipeline } from "stream";
import { Storage } from "@google-cloud/storage";

import { File } from "../resolvers/mutation";

export interface StorageInterface {
  storeFile: (file: File) => Promise<void>;
}

export class StorageBucket implements StorageInterface {
  private store: Storage;
  private bucketName = "img-test-nick";

  constructor(store: Storage) {
    this.store = store;
  }

  public async storeFile(file: File) {
    const bucket = this.store.bucket(this.bucketName);

    const blob = bucket.file(file.filename);
    const readStream = file.createReadStream();
    const writeStream = blob.createWriteStream({ resumable: false });

    pipeline(readStream, writeStream, err => {
      if (err) {
        throw new Error(`Failed to upload image: ${err}`);
      } else {
        console.log("successfully uploaded image");
      }
    });
  }
}
