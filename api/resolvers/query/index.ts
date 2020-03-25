import { FireStoreInterface } from "../../firestore";
import { StorageInterface } from "../../cloudstorage/storage";

interface ResolverContext {
  storageBucket: StorageInterface;
  db: FireStoreInterface;
}

interface ResolverArgs {
  userId: string;
}

export const queryResolvers = {
  getRecipe: async (
    parent: any,
    args: ResolverArgs,
    context: ResolverContext
  ) => getRecipe(args, context)
};

const getRecipe = async (args: ResolverArgs, context: ResolverContext) => {
  const { db } = context;
  const recipes = await db.getRecipes(args.userId);
  return recipes;
};
