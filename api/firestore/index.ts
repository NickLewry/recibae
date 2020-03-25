import { DocumentData } from "@google-cloud/firestore";

export interface Recipe {
  id: string;
  userId: string;
  url: string;
  name: string;
}

export interface FireStoreInterface {
  storeRecipe: (recipe: any) => Promise<Recipe>;
  getRecipes: (userId: string) => Promise<DocumentData[]>;
}

export class FireStore implements FireStoreInterface {
  private db: FirebaseFirestore.Firestore;

  constructor(db: FirebaseFirestore.Firestore) {
    this.db = db;
  }

  public async getRecipes(userId: string) {
    const collection = this.db.collection("recipes");
    const recipes = await collection.where("userId", "==", userId).get();
    return recipes.docs.map(doc => doc.data());
  }

  public async storeRecipe(recipe: any): Promise<Recipe> {
    const collection = this.db.collection("recipes");

    const data = {
      name: "test2.png",
      url: "test2.png",
      userId: "Ysq7bvAMcXbWtk0FDDKg"
    };

    const ref = collection.doc();
    await ref.set(data);

    return {
      id: ref.id,
      userId: "Ysq7bvAMcXbWtk0FDDKg",
      name: "test2.png",
      url: "test2.png"
    };
  }
}
