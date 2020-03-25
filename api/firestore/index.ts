interface Recipe {
  userId: string;
  image: string;
}

export interface FireStoreInterface {
  storeRecipe: (recipe: any) => Promise<void>;
}

export class FireStore implements FireStoreInterface {
  private db: FirebaseFirestore.Firestore;

  constructor(db: FirebaseFirestore.Firestore) {
    this.db = db;
  }

  public async storeRecipe(recipe: any) {
    const collection = this.db.collection("recipes");

    const data = {
      url: "test2.png",
      userId: "Ysq7bvAMcXbWtk0FDDKg"
    };

    await collection.doc().set(data);
  }
}
