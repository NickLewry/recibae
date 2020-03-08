export const mutationResolvers = {
  createRecipe: (parent: any, args: any, context: any) => createRecipe(args)
};

const createRecipe = (args: any) => {
  return {
    id: "2",
    url: "someurl",
    title: args.title
  };
};
